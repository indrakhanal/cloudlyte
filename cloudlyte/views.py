from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.core.mail import send_mail, EmailMessage
from django.conf import settings
import json

def home_page(request):
    return render(request, 'index.html')


def send_email(request):
    data = json.loads(request.body)
    name = data.get('name')
    email = data.get('email')
    subject = data.get('subject')
    message = data.get('message')

    if not all([email, name, subject, message]): 
        return JsonResponse(
            {"status": "error", "message": "All fields are required."}, 
            status=400
        )
    try:
        html_message = f"""
                <html>
                <body>
                    <h1>New Message from {name}</h1>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Message:</strong></p>
                    <p>{message}</p>
                </body>
                </html>
            """

        send_mail(
            subject=subject,
            message=message,  # Plain text fallback
            from_email=email,
            recipient_list=[settings.EMAIL_HOST_USER],  # Your email
            fail_silently=False,
            html_message=html_message,  # Add HTML message here
            )

        return JsonResponse(
            {"status": "success", "message": "Email sent successfully!"}, 
            status=200
        )
    except Exception as e:
        return JsonResponse(
            {"status": "error", "message": f"Failed to send email: {str(e)}"}, 
            status=500
        )

    