import os
from email.message import EmailMessage
import ssl
import smtplib
import datetime

def send_email(receiver_email, message):
    sender_email = 'crce.9368.aids@gmail.com'
    email_password = '###########'  # 16 digit key received from Google of the sender

    subject = "Message from TerminalEvolvers"

    em = EmailMessage()
    em['From'] = sender_email
    em['To'] = receiver_email
    em['Subject'] = subject
    em.set_content(str(message))
    context = ssl.create_default_context()
    with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
        smtp.login(sender_email, email_password)
        smtp.sendmail(sender_email, receiver_email, em.as_string())


today = datetime.date.today()
if today.day == 1:
    print("Email sent!")
    send_email('edryneshajan8@gmail.com', 3)
