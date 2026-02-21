# QME-Search: California DWC QME Doctor Review Aggregator

A comprehensive web application that cross-references all doctors listed in the California Division of Workers' Compensation (DWC) Qualified Medical Evaluator (QME) database with doctor reviews from multiple platforms (Vitals.com, Yelp, HealthGrades.com, and Google Reviews).

## Features

- **Multi-Platform Review Aggregation**: Combines reviews from Vitals, Yelp, HealthGrades, and Google
- **Specialty Filtering**: Search doctors by medical specialty
- **Geographic Search**: Find doctors within 75 miles of your location
- **Intelligent Ranking**: Results sorted by composite score (average rating × review count)
- **Cross-Reference Matching**: Matches doctors across multiple review platforms using name, NPI, and address
- **Real-Time Data**: Aggregates current ratings and review counts

## Tech Stack

- **Frontend**: React.js with TypeScript
- **Backend**: Node.js/Express.js
- **Database**: PostgreSQL (with Redis caching)
- **APIs**: Vitals, Yelp, HealthGrades, Google Places, DWC Database
- **Deployment**: Docker, Docker Compose

## Project Structure

```
QME-Search/
├── README.md
├── .gitignore
├── package.json
├── docker-compose.yml
├── backend/
│   ├── src/
│   │   ├── api/
│   │   ├── services/
│   │   ├── models/
│   │   ├── routes/
│   │   └── app.js
│   ├── tests/
│   └── package.json
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
└── docs/
    ├── API-DOCUMENTATION.md
    ├── SETUP-GUIDE.md
    └── ARCHITECTURE.md
```

## Installation & Setup

See [SETUP-GUIDE.md](docs/SETUP-GUIDE.md) for detailed installation instructions.

## Contributing

Contributions are welcome! Please follow the standard git workflow.

## License

MIT License
