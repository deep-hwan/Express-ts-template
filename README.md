# Express.js + Typescript + Mongoose + GCP Template

셋팅이 완료된 빠른 개발이 가능한 백엔드 템플릿
Express.js + Typescript + Mongoose + GCP (Cloud Run) 템플릿

## start nodemon

    npm run dev

---

## Develop System

- Node.js
- Express.js
- MongoDB
- Mongoose
- GCP : Cloud Run

---

## Develop Items

- nodemon
- jwt
- helmet
- bcrypt
- cors

---

## GCP Clound Run Upload

1. gcloud auth login
2. gcloud config set project GCP_USER_NAME
3. gcloud builds submit --tag gcr.io/GCP_USER_NAME/CLOUN_RUN_NAME

#### 최초 업로드 시

.... 이후

4.  gcloud run deploy --image gcr.io/GCP_USER_NAME/CLOUN_RUN_NAME --platform managed
