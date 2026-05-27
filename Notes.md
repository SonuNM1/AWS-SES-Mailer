Buy domain
↓
Verify domain in SES
↓
SPF
↓
DKIM
↓
DMARC
↓
Warmup

this is main reason for inbox placement. eveyrthing comes later in the process


### Domain Verification (AWS SES, DNS)

- for AWS to verify domain that it belongs to you 
-   TXT  -> Domain Verification
    CNAME -> DKIM
    TXT -> SPF
    TXT -> DMARC

## DNS Authentication AWS SES 

- Domain ownership verification so that AWS trust the domain belongs to us 

- that's why adding verification records in DNS 

- DKIM setup so the mail server verify email is genuine not spoofed 

- better inbox placement 

- verification/authentication records adding 

- AWS ke liye adding CNAME/TXT records  