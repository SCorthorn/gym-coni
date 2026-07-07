import { db } from './firebase.js';
import {
  collection, getDocs, addDoc, onSnapshot, query, orderBy, limit, Timestamp
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

const SESSIONS_COL = collection(db, 'coni', 'data', 'sessions');

const HISTORICAL_SESSIONS = [
  {
    "routineName": "C",
    "routineId": "session_c",
    "startedAt": "2026-05-04T00:00:00+00:00",
    "finishedAt": "2026-05-04T00:00:00+00:00",
    "durationSeconds": 3600,
    "exercises": [
      {
        "exerciseName": "Dead bug",
        "exerciseId": "dead_bug",
        "sets": [
          {
            "reps": 30,
            "weight": 2,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 2,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 2,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 2,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Leg raises",
        "exerciseId": "leg_raises",
        "sets": [
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Foot 2 foot",
        "exerciseId": "foot_2_foot",
        "sets": [
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Plank",
        "exerciseId": "plank",
        "sets": [
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Sentadillas",
        "exerciseId": "sentadillas",
        "sets": [
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Peso muerto",
        "exerciseId": "peso_muerto",
        "sets": [
          {
            "reps": 12,
            "weight": 12,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 12,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 12,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 12,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Clam shell",
        "exerciseId": "clam_shell",
        "sets": [
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Hammer curl",
        "exerciseId": "hammer_curl",
        "sets": [
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Lateral raises",
        "exerciseId": "lateral_raises",
        "sets": [
          {
            "reps": 12,
            "weight": 2,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 2,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 2,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 2,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Upper back",
        "exerciseId": "upper_back",
        "sets": [
          {
            "reps": 12,
            "weight": 15,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 15,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 15,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 15,
            "completed": true
          }
        ]
      }
    ]
  },
  {
    "routineName": "C",
    "routineId": "session_c",
    "startedAt": "2026-05-05T00:00:00+00:00",
    "finishedAt": "2026-05-05T00:00:00+00:00",
    "durationSeconds": 3600,
    "exercises": [
      {
        "exerciseName": "Dead bug",
        "exerciseId": "dead_bug",
        "sets": [
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Scissors",
        "exerciseId": "scissors",
        "sets": [
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Russian twist",
        "exerciseId": "russian_twist",
        "sets": [
          {
            "reps": 30,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 6,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Over head sit ups",
        "exerciseId": "over_head_sit_ups",
        "sets": [
          {
            "reps": 20,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 4,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Plank",
        "exerciseId": "plank",
        "sets": [
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Sentadillas",
        "exerciseId": "sentadillas",
        "sets": [
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Estocadas",
        "exerciseId": "estocadas",
        "sets": [
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Clam shell",
        "exerciseId": "clam_shell",
        "sets": [
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Hammer curl",
        "exerciseId": "hammer_curl",
        "sets": [
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Tricep extension",
        "exerciseId": "tricep_extension",
        "sets": [
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Upper back",
        "exerciseId": "upper_back",
        "sets": [
          {
            "reps": 10,
            "weight": 17.5,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 17.5,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 17.5,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 17.5,
            "completed": true
          }
        ]
      }
    ]
  },
  {
    "routineName": "C",
    "routineId": "session_c",
    "startedAt": "2026-05-07T00:00:00+00:00",
    "finishedAt": "2026-05-07T00:00:00+00:00",
    "durationSeconds": 3600,
    "exercises": [
      {
        "exerciseName": "Dead bug",
        "exerciseId": "dead_bug",
        "sets": [
          {
            "reps": 30,
            "weight": 2,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 2,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 2,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 2,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Russian twist",
        "exerciseId": "russian_twist",
        "sets": [
          {
            "reps": 30,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 8,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Crunches",
        "exerciseId": "crunches",
        "sets": [
          {
            "reps": 10,
            "weight": 2,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 2,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 2,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 2,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Over head sit ups",
        "exerciseId": "over_head_sit_ups",
        "sets": [
          {
            "reps": 20,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 6,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Foot 2 foot",
        "exerciseId": "foot_2_foot",
        "sets": [
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Sentadillas",
        "exerciseId": "sentadillas",
        "sets": [
          {
            "reps": 10,
            "weight": 12,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 12,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 12,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 12,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Peso muerto",
        "exerciseId": "peso_muerto",
        "sets": [
          {
            "reps": 10,
            "weight": 16,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 16,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 16,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 16,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Gemelos",
        "exerciseId": "gemelos",
        "sets": [
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Lat pulldown",
        "exerciseId": "lat_pulldown",
        "sets": [
          {
            "reps": 10,
            "weight": 27.5,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 27.5,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 27.5,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 27.5,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Remo",
        "exerciseId": "remo",
        "sets": [
          {
            "reps": 10,
            "weight": 25,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 25,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 25,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 25,
            "completed": true
          }
        ]
      }
    ]
  },
  {
    "routineName": "C",
    "routineId": "session_c",
    "startedAt": "2026-05-14T00:00:00+00:00",
    "finishedAt": "2026-05-14T00:00:00+00:00",
    "durationSeconds": 3600,
    "exercises": [
      {
        "exerciseName": "Cortos",
        "exerciseId": "cortos",
        "sets": [
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Dead bug",
        "exerciseId": "dead_bug",
        "sets": [
          {
            "reps": 30,
            "weight": 2,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 2,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 2,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Side to side crunches",
        "exerciseId": "side_to_side_crunches",
        "sets": [
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Plank",
        "exerciseId": "plank",
        "sets": [
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Sentadillas",
        "exerciseId": "sentadillas",
        "sets": [
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Estocadas",
        "exerciseId": "estocadas",
        "sets": [
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Clam shell",
        "exerciseId": "clam_shell",
        "sets": [
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Hammer curl",
        "exerciseId": "hammer_curl",
        "sets": [
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Lateral raises",
        "exerciseId": "lateral_raises",
        "sets": [
          {
            "reps": 12,
            "weight": 2,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 2,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 2,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 2,
            "completed": true
          }
        ]
      }
    ]
  },
  {
    "routineName": "C",
    "routineId": "session_c",
    "startedAt": "2026-05-15T00:00:00+00:00",
    "finishedAt": "2026-05-15T00:00:00+00:00",
    "durationSeconds": 3600,
    "exercises": [
      {
        "exerciseName": "Dead bug",
        "exerciseId": "dead_bug",
        "sets": [
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Russian twist",
        "exerciseId": "russian_twist",
        "sets": [
          {
            "reps": 30,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 8,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Over head sit ups",
        "exerciseId": "over_head_sit_ups",
        "sets": [
          {
            "reps": 20,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 6,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Foot 2 foot",
        "exerciseId": "foot_2_foot",
        "sets": [
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "90° Leg drop",
        "exerciseId": "90__leg_drop",
        "sets": [
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Sentadillas",
        "exerciseId": "sentadillas",
        "sets": [
          {
            "reps": 12,
            "weight": 10,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 10,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 10,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 10,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Peso muerto",
        "exerciseId": "peso_muerto",
        "sets": [
          {
            "reps": 10,
            "weight": 15,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 15,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 15,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 15,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Lat pulldown",
        "exerciseId": "lat_pulldown",
        "sets": [
          {
            "reps": 10,
            "weight": 27.5,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 27.5,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 27.5,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 27.5,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Tricep extension",
        "exerciseId": "tricep_extension",
        "sets": [
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          }
        ]
      }
    ]
  },
  {
    "routineName": "B",
    "routineId": "session_b",
    "startedAt": "2026-05-19T00:00:00+00:00",
    "finishedAt": "2026-05-19T00:00:00+00:00",
    "durationSeconds": 3600,
    "exercises": [
      {
        "exerciseName": "Cortos",
        "exerciseId": "cortos",
        "sets": [
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Dead bug",
        "exerciseId": "dead_bug",
        "sets": [
          {
            "reps": 30,
            "weight": 2,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 2,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 2,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 2,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Leg raises",
        "exerciseId": "leg_raises",
        "sets": [
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Plank",
        "exerciseId": "plank",
        "sets": [
          {
            "reps": 40,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 40,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 40,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 40,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Sentadilla isometrica pared",
        "exerciseId": "sentadilla_isometrica_pared",
        "sets": [
          {
            "reps": 12,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Estocada isometrica",
        "exerciseId": "estocada_isometrica",
        "sets": [
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "kettlebell knee raise",
        "exerciseId": "kettlebell_knee_raise",
        "sets": [
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Puente gluteos",
        "exerciseId": "puente_gluteos",
        "sets": [
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Puente gluteos 1 pierna",
        "exerciseId": "puente_gluteos_1_pierna",
        "sets": [
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Hammer curl",
        "exerciseId": "hammer_curl",
        "sets": [
          {
            "reps": 8,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 8,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 8,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 8,
            "weight": 6,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Lateral raises",
        "exerciseId": "lateral_raises",
        "sets": [
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Tricep extension",
        "exerciseId": "tricep_extension",
        "sets": [
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          }
        ]
      }
    ]
  },
  {
    "routineName": "A",
    "routineId": "session_a",
    "startedAt": "2026-05-22T00:00:00+00:00",
    "finishedAt": "2026-05-22T00:00:00+00:00",
    "durationSeconds": 3600,
    "exercises": [
      {
        "exerciseName": "Russian twist",
        "exerciseId": "russian_twist",
        "sets": [
          {
            "reps": 30,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 8,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Over head sit ups",
        "exerciseId": "over_head_sit_ups",
        "sets": [
          {
            "reps": 20,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 6,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "90° Leg drop",
        "exerciseId": "90__leg_drop",
        "sets": [
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Plank",
        "exerciseId": "plank",
        "sets": [
          {
            "reps": 40,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 40,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 40,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 40,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Peso muerto",
        "exerciseId": "peso_muerto",
        "sets": [
          {
            "reps": 10,
            "weight": 17.5,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 17.5,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 17.5,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 17.5,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Clam shell",
        "exerciseId": "clam_shell",
        "sets": [
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Sentadilla isometrica pared",
        "exerciseId": "sentadilla_isometrica_pared",
        "sets": [
          {
            "reps": 12,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Estocada isometrica",
        "exerciseId": "estocada_isometrica",
        "sets": [
          {
            "reps": 20,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 8,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Puente gluteos",
        "exerciseId": "puente_gluteos",
        "sets": [
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Hammer curl + press hombros",
        "exerciseId": "hammer_curl___press_hombros",
        "sets": [
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Lateral raises",
        "exerciseId": "lateral_raises",
        "sets": [
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Tricep overhead extension",
        "exerciseId": "tricep_overhead_extension",
        "sets": [
          {
            "reps": 10,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 6,
            "completed": true
          }
        ]
      }
    ]
  },
  {
    "routineName": "C",
    "routineId": "session_c",
    "startedAt": "2026-05-26T00:00:00+00:00",
    "finishedAt": "2026-05-26T00:00:00+00:00",
    "durationSeconds": 3600,
    "exercises": [
      {
        "exerciseName": "Cortos",
        "exerciseId": "cortos",
        "sets": [
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Dead bug",
        "exerciseId": "dead_bug",
        "sets": [
          {
            "reps": 30,
            "weight": 2,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 2,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 2,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 2,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Crunches",
        "exerciseId": "crunches",
        "sets": [
          {
            "reps": 20,
            "weight": 2,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 2,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 2,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 2,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Foot 2 foot",
        "exerciseId": "foot_2_foot",
        "sets": [
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Plank",
        "exerciseId": "plank",
        "sets": [
          {
            "reps": 40,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 40,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 40,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 40,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Sentadilla isometrica pared",
        "exerciseId": "sentadilla_isometrica_pared",
        "sets": [
          {
            "reps": 12,
            "weight": 5,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 5,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 5,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 5,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Estocada isometrica",
        "exerciseId": "estocada_isometrica",
        "sets": [
          {
            "reps": 20,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 8,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Step down excéntrico",
        "exerciseId": "step_down_exc_ntrico",
        "sets": [
          {
            "reps": 12,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 8,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Puente gluteos",
        "exerciseId": "puente_gluteos",
        "sets": [
          {
            "reps": 30,
            "weight": 10,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 10,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 10,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 10,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Hammer curl",
        "exerciseId": "hammer_curl",
        "sets": [
          {
            "reps": 8,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 8,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 8,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 8,
            "weight": 6,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Lateral raises",
        "exerciseId": "lateral_raises",
        "sets": [
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Tricep extension",
        "exerciseId": "tricep_extension",
        "sets": [
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          }
        ]
      }
    ]
  },
  {
    "routineName": "A",
    "routineId": "session_a",
    "startedAt": "2026-05-27T00:00:00+00:00",
    "finishedAt": "2026-05-27T00:00:00+00:00",
    "durationSeconds": 3600,
    "exercises": [
      {
        "exerciseName": "Over head sit ups",
        "exerciseId": "over_head_sit_ups",
        "sets": [
          {
            "reps": 20,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 6,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "90° Leg drop",
        "exerciseId": "90__leg_drop",
        "sets": [
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Comando plank",
        "exerciseId": "comando_plank",
        "sets": [
          {
            "reps": 40,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 40,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 40,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 40,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Peso muerto",
        "exerciseId": "peso_muerto",
        "sets": [
          {
            "reps": 12,
            "weight": 20,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 20,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 20,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 20,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Clam shell",
        "exerciseId": "clam_shell",
        "sets": [
          {
            "reps": 10,
            "weight": 5,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 5,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 5,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 5,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "kettlebell knee raise",
        "exerciseId": "kettlebell_knee_raise",
        "sets": [
          {
            "reps": 4,
            "weight": 25,
            "completed": true
          },
          {
            "reps": 4,
            "weight": 25,
            "completed": true
          },
          {
            "reps": 4,
            "weight": 25,
            "completed": true
          },
          {
            "reps": 4,
            "weight": 25,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Sentadilla a 75*",
        "exerciseId": "sentadilla_a_75_",
        "sets": [
          {
            "reps": 30,
            "weight": 10,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 10,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 10,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 10,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Lat pulldown",
        "exerciseId": "lat_pulldown",
        "sets": [
          {
            "reps": 10,
            "weight": 30,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 30,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 30,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 30,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Lower back",
        "exerciseId": "lower_back",
        "sets": [
          {
            "reps": 12,
            "weight": 25,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 25,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 25,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 25,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Upper back",
        "exerciseId": "upper_back",
        "sets": [
          {
            "reps": 10,
            "weight": 22.5,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 22.5,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 22.5,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 22.5,
            "completed": true
          }
        ]
      }
    ]
  },
  {
    "routineName": "A",
    "routineId": "session_a",
    "startedAt": "2026-06-04T00:00:00+00:00",
    "finishedAt": "2026-06-04T00:00:00+00:00",
    "durationSeconds": 3600,
    "exercises": [
      {
        "exerciseName": "Cortos",
        "exerciseId": "cortos",
        "sets": [
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Dead bug",
        "exerciseId": "dead_bug",
        "sets": [
          {
            "reps": 30,
            "weight": 2,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 2,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 2,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "90° Leg drop",
        "exerciseId": "90__leg_drop",
        "sets": [
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Plank",
        "exerciseId": "plank",
        "sets": [
          {
            "reps": 40,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 40,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 40,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Clam shell",
        "exerciseId": "clam_shell",
        "sets": [
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Sentadilla isometrica pared",
        "exerciseId": "sentadilla_isometrica_pared",
        "sets": [
          {
            "reps": 12,
            "weight": 5,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 5,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 5,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 5,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Estocada isometrica",
        "exerciseId": "estocada_isometrica",
        "sets": [
          {
            "reps": 20,
            "weight": 10,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 10,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 10,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 10,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Sentadilla a 75*",
        "exerciseId": "sentadilla_a_75_",
        "sets": [
          {
            "reps": 30,
            "weight": 10,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 10,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 10,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 10,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Lat pulldown",
        "exerciseId": "lat_pulldown",
        "sets": [
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Lower back",
        "exerciseId": "lower_back",
        "sets": [
          {
            "reps": 12,
            "weight": 27.5,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 27.5,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 27.5,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 27.5,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Remo",
        "exerciseId": "remo",
        "sets": [
          {
            "reps": 10,
            "weight": 27.5,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 27.5,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 27.5,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 27.5,
            "completed": true
          }
        ]
      }
    ]
  },
  {
    "routineName": "C",
    "routineId": "session_c",
    "startedAt": "2026-06-07T00:00:00+00:00",
    "finishedAt": "2026-06-07T00:00:00+00:00",
    "durationSeconds": 3600,
    "exercises": [
      {
        "exerciseName": "Dead bug",
        "exerciseId": "dead_bug",
        "sets": [
          {
            "reps": 30,
            "weight": 2,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 2,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 2,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Russian twist",
        "exerciseId": "russian_twist",
        "sets": [
          {
            "reps": 30,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 8,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Plank",
        "exerciseId": "plank",
        "sets": [
          {
            "reps": 40,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 40,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 40,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Estocada isometrica",
        "exerciseId": "estocada_isometrica",
        "sets": [
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Puente gluteos",
        "exerciseId": "puente_gluteos",
        "sets": [
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Puente gluteos 1 pierna",
        "exerciseId": "puente_gluteos_1_pierna",
        "sets": [
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          }
        ]
      }
    ]
  },
  {
    "routineName": "B",
    "routineId": "session_b",
    "startedAt": "2026-06-09T00:00:00+00:00",
    "finishedAt": "2026-06-09T00:00:00+00:00",
    "durationSeconds": 3600,
    "exercises": [
      {
        "exerciseName": "Leg raises",
        "exerciseId": "leg_raises",
        "sets": [
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Plank pull through",
        "exerciseId": "plank_pull_through",
        "sets": [
          {
            "reps": 45,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 45,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 45,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 45,
            "weight": 6,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Over head sit ups",
        "exerciseId": "over_head_sit_ups",
        "sets": [
          {
            "reps": 20,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 6,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Foot 2 foot",
        "exerciseId": "foot_2_foot",
        "sets": [
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Sentadillas",
        "exerciseId": "sentadillas",
        "sets": [
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Abducción de cadera elástico (de pie)",
        "exerciseId": "abducci_n_de_cadera_el_stico__de_pie_",
        "sets": [
          {
            "reps": 12,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Peso muerto",
        "exerciseId": "peso_muerto",
        "sets": [
          {
            "reps": 12,
            "weight": 20,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 20,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 20,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 20,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Lateral raises",
        "exerciseId": "lateral_raises",
        "sets": [
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Tricep extension",
        "exerciseId": "tricep_extension",
        "sets": [
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          }
        ]
      }
    ]
  },
  {
    "routineName": "C",
    "routineId": "session_c",
    "startedAt": "2026-06-16T00:00:00+00:00",
    "finishedAt": "2026-06-16T00:00:00+00:00",
    "durationSeconds": 3600,
    "exercises": [
      {
        "exerciseName": "Sentadillas",
        "exerciseId": "sentadillas",
        "sets": [
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Clam shell",
        "exerciseId": "clam_shell",
        "sets": [
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Sentadilla isometrica pared",
        "exerciseId": "sentadilla_isometrica_pared",
        "sets": [
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Estocada isometrica",
        "exerciseId": "estocada_isometrica",
        "sets": [
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Puente gluteos",
        "exerciseId": "puente_gluteos",
        "sets": [
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Terminal Knee Extension",
        "exerciseId": "terminal_knee_extension",
        "sets": [
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          }
        ]
      }
    ]
  },
  {
    "routineName": "A",
    "routineId": "session_a",
    "startedAt": "2026-06-18T00:00:00+00:00",
    "finishedAt": "2026-06-18T00:00:00+00:00",
    "durationSeconds": 3600,
    "exercises": [
      {
        "exerciseName": "Plank pull through",
        "exerciseId": "plank_pull_through",
        "sets": [
          {
            "reps": 60,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 60,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 60,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 60,
            "weight": 6,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Over head sit ups",
        "exerciseId": "over_head_sit_ups",
        "sets": [
          {
            "reps": 20,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 6,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Side plank",
        "exerciseId": "side_plank",
        "sets": [
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "90° Leg drop",
        "exerciseId": "90__leg_drop",
        "sets": [
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Plank",
        "exerciseId": "plank",
        "sets": [
          {
            "reps": 45,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 45,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 45,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 45,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Gemelos",
        "exerciseId": "gemelos",
        "sets": [
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Sentadilla isometrica pared",
        "exerciseId": "sentadilla_isometrica_pared",
        "sets": [
          {
            "reps": 12,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 8,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Step down excéntrico",
        "exerciseId": "step_down_exc_ntrico",
        "sets": [
          {
            "reps": 12,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 8,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Sentadilla a 75*",
        "exerciseId": "sentadilla_a_75_",
        "sets": [
          {
            "reps": 35,
            "weight": 10,
            "completed": true
          },
          {
            "reps": 35,
            "weight": 10,
            "completed": true
          },
          {
            "reps": 35,
            "weight": 10,
            "completed": true
          },
          {
            "reps": 35,
            "weight": 10,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Terminal Knee Extension",
        "exerciseId": "terminal_knee_extension",
        "sets": [
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Lat pulldown",
        "exerciseId": "lat_pulldown",
        "sets": [
          {
            "reps": 10,
            "weight": 32.5,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 32.5,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 32.5,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 32.5,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Lower back",
        "exerciseId": "lower_back",
        "sets": [
          {
            "reps": 12,
            "weight": 27.5,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 27.5,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 27.5,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 27.5,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Hammer curl",
        "exerciseId": "hammer_curl",
        "sets": [
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Remo",
        "exerciseId": "remo",
        "sets": [
          {
            "reps": 10,
            "weight": 27.5,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 27.5,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 27.5,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 27.5,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Upper back",
        "exerciseId": "upper_back",
        "sets": [
          {
            "reps": 10,
            "weight": 22.5,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 22.5,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 22.5,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 22.5,
            "completed": true
          }
        ]
      }
    ]
  },
  {
    "routineName": "B",
    "routineId": "session_b",
    "startedAt": "2026-06-22T00:00:00+00:00",
    "finishedAt": "2026-06-22T00:00:00+00:00",
    "durationSeconds": 3600,
    "exercises": [
      {
        "exerciseName": "Cortos",
        "exerciseId": "cortos",
        "sets": [
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Leg raises",
        "exerciseId": "leg_raises",
        "sets": [
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Russian twist",
        "exerciseId": "russian_twist",
        "sets": [
          {
            "reps": 30,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 8,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Side to side crunches",
        "exerciseId": "side_to_side_crunches",
        "sets": [
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Comando plank",
        "exerciseId": "comando_plank",
        "sets": [
          {
            "reps": 40,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 40,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 40,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Abducción de cadera elástico (de pie)",
        "exerciseId": "abducci_n_de_cadera_el_stico__de_pie_",
        "sets": [
          {
            "reps": 12,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Peso muerto",
        "exerciseId": "peso_muerto",
        "sets": [
          {
            "reps": 12,
            "weight": 22.5,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 22.5,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 22.5,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 22.5,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Puente gluteos 1 pierna",
        "exerciseId": "puente_gluteos_1_pierna",
        "sets": [
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Single leg deadlift con kettlebell",
        "exerciseId": "single_leg_deadlift_con_kettlebell",
        "sets": [
          {
            "reps": 10,
            "weight": 12,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 12,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 12,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 12,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Press pecho",
        "exerciseId": "press_pecho",
        "sets": [
          {
            "reps": 12,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 4,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Tricep extension",
        "exerciseId": "tricep_extension",
        "sets": [
          {
            "reps": 12,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 4,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Tricep overhead extension",
        "exerciseId": "tricep_overhead_extension",
        "sets": [
          {
            "reps": 10,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 6,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Aperturas con mancuernas",
        "exerciseId": "aperturas_con_mancuernas",
        "sets": [
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          }
        ]
      }
    ]
  },
  {
    "routineName": "C",
    "routineId": "session_c",
    "startedAt": "2026-06-24T00:00:00+00:00",
    "finishedAt": "2026-06-24T00:00:00+00:00",
    "durationSeconds": 3600,
    "exercises": [
      {
        "exerciseName": "Dead bug",
        "exerciseId": "dead_bug",
        "sets": [
          {
            "reps": 30,
            "weight": 2,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 2,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 2,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Scissors",
        "exerciseId": "scissors",
        "sets": [
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Russian twist",
        "exerciseId": "russian_twist",
        "sets": [
          {
            "reps": 30,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 8,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Crunches",
        "exerciseId": "crunches",
        "sets": [
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Foot 2 foot",
        "exerciseId": "foot_2_foot",
        "sets": [
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Side plank",
        "exerciseId": "side_plank",
        "sets": [
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Sentadillas",
        "exerciseId": "sentadillas",
        "sets": [
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Clam shell",
        "exerciseId": "clam_shell",
        "sets": [
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Estocada isometrica",
        "exerciseId": "estocada_isometrica",
        "sets": [
          {
            "reps": 20,
            "weight": 10,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 10,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 10,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 10,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Hammer curl + press hombros",
        "exerciseId": "hammer_curl___press_hombros",
        "sets": [
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          }
        ]
      }
    ]
  },
  {
    "routineName": "A",
    "routineId": "session_a",
    "startedAt": "2026-06-26T00:00:00+00:00",
    "finishedAt": "2026-06-26T00:00:00+00:00",
    "durationSeconds": 3600,
    "exercises": [
      {
        "exerciseName": "Plank pull through",
        "exerciseId": "plank_pull_through",
        "sets": [
          {
            "reps": 60,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 60,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 60,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 60,
            "weight": 6,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Over head sit ups",
        "exerciseId": "over_head_sit_ups",
        "sets": [
          {
            "reps": 20,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 6,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Side plank",
        "exerciseId": "side_plank",
        "sets": [
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "90° Leg drop",
        "exerciseId": "90__leg_drop",
        "sets": [
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Plank",
        "exerciseId": "plank",
        "sets": [
          {
            "reps": 45,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 45,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 45,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 45,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Gemelos",
        "exerciseId": "gemelos",
        "sets": [
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 15,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Sentadilla isometrica pared",
        "exerciseId": "sentadilla_isometrica_pared",
        "sets": [
          {
            "reps": 12,
            "weight": 10,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 10,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 10,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 10,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Step down excéntrico",
        "exerciseId": "step_down_exc_ntrico",
        "sets": [
          {
            "reps": 12,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 8,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Terminal Knee Extension",
        "exerciseId": "terminal_knee_extension",
        "sets": [
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Lat pulldown",
        "exerciseId": "lat_pulldown",
        "sets": [
          {
            "reps": 10,
            "weight": 32.5,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 32.5,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 32.5,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 32.5,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Hammer curl",
        "exerciseId": "hammer_curl",
        "sets": [
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          }
        ]
      }
    ]
  },
  {
    "routineName": "B",
    "routineId": "session_b",
    "startedAt": "2026-06-30T00:00:00+00:00",
    "finishedAt": "2026-06-30T00:00:00+00:00",
    "durationSeconds": 3600,
    "exercises": [
      {
        "exerciseName": "Cortos",
        "exerciseId": "cortos",
        "sets": [
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Leg raises",
        "exerciseId": "leg_raises",
        "sets": [
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Russian twist",
        "exerciseId": "russian_twist",
        "sets": [
          {
            "reps": 40,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 40,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 40,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Side to side crunches",
        "exerciseId": "side_to_side_crunches",
        "sets": [
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Plank",
        "exerciseId": "plank",
        "sets": [
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          }
        ]
      }
    ]
  },
  {
    "routineName": "B",
    "routineId": "session_b",
    "startedAt": "2026-07-03T00:00:00+00:00",
    "finishedAt": "2026-07-03T00:00:00+00:00",
    "durationSeconds": 3600,
    "exercises": [
      {
        "exerciseName": "Cortos",
        "exerciseId": "cortos",
        "sets": [
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Leg raises",
        "exerciseId": "leg_raises",
        "sets": [
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Russian twist",
        "exerciseId": "russian_twist",
        "sets": [
          {
            "reps": 30,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 8,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Side to side crunches",
        "exerciseId": "side_to_side_crunches",
        "sets": [
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Comando plank",
        "exerciseId": "comando_plank",
        "sets": [
          {
            "reps": 45,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 45,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 45,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Abducción de cadera elástico (de pie)",
        "exerciseId": "abducci_n_de_cadera_el_stico__de_pie_",
        "sets": [
          {
            "reps": 12,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Peso muerto",
        "exerciseId": "peso_muerto",
        "sets": [
          {
            "reps": 12,
            "weight": 25,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 25,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 25,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 25,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Single leg deadlift con kettlebell",
        "exerciseId": "single_leg_deadlift_con_kettlebell",
        "sets": [
          {
            "reps": 10,
            "weight": 12,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 12,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 12,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 16,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Press pecho",
        "exerciseId": "press_pecho",
        "sets": [
          {
            "reps": 12,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 6,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 6,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Aperturas con mancuernas",
        "exerciseId": "aperturas_con_mancuernas",
        "sets": [
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          }
        ]
      }
    ]
  },
  {
    "routineName": "C",
    "routineId": "session_c",
    "startedAt": "2026-07-05T00:00:00+00:00",
    "finishedAt": "2026-07-05T00:00:00+00:00",
    "durationSeconds": 3600,
    "exercises": [
      {
        "exerciseName": "Dead bug",
        "exerciseId": "dead_bug",
        "sets": [
          {
            "reps": 30,
            "weight": 2,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 2,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 2,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Russian twist",
        "exerciseId": "russian_twist",
        "sets": [
          {
            "reps": 30,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 8,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Crunches",
        "exerciseId": "crunches",
        "sets": [
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Foot 2 foot",
        "exerciseId": "foot_2_foot",
        "sets": [
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          },
          {
            "reps": 30,
            "weight": 0,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Sentadillas",
        "exerciseId": "sentadillas",
        "sets": [
          {
            "reps": 10,
            "weight": 35,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 35,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 35,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 35,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Estocada isometrica",
        "exerciseId": "estocada_isometrica",
        "sets": [
          {
            "reps": 20,
            "weight": 10,
            "completed": true
          },
          {
            "reps": 20,
            "weight": 10,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "kettlebell knee raise",
        "exerciseId": "kettlebell_knee_raise",
        "sets": [
          {
            "reps": 8,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 8,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 8,
            "weight": 8,
            "completed": true
          },
          {
            "reps": 8,
            "weight": 8,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Hammer curl",
        "exerciseId": "hammer_curl",
        "sets": [
          {
            "reps": 12,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 12,
            "weight": 4,
            "completed": true
          }
        ]
      },
      {
        "exerciseName": "Lateral raises",
        "exerciseId": "lateral_raises",
        "sets": [
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          },
          {
            "reps": 10,
            "weight": 4,
            "completed": true
          }
        ]
      }
    ]
  }
];

// ── State ─────────────────────────────────────────────────

let allSessions  = [];
let activeKey    = null;   // currently expanded exercise (normalized name key)
let activeMetric = 'volume';
let chart        = null;

function tsToDate(ts) {
  if (!ts) return new Date(0);
  if (ts.seconds) return new Date(ts.seconds * 1000);
  return new Date(ts);
}

// Deduplicate by normalized name so e.g. "Lat Pulldown" logged under
// different exerciseIds (Firestore ID vs "lat_pulldown") collapses into one.
function getTrackedExercises() {
  const names  = new Map(); // normalized key → display name
  const counts = new Map(); // normalized key → session count
  for (const s of allSessions) {
    const seen = new Set();
    for (const ex of (s.exercises || [])) {
      const key = ex.exerciseName.trim().toLowerCase();
      if (!names.has(key)) names.set(key, ex.exerciseName.trim());
      if (!seen.has(key)) { counts.set(key, (counts.get(key) || 0) + 1); seen.add(key); }
    }
  }
  return [...names.entries()]
    .map(([key, name]) => ({ key, name, count: counts.get(key) || 0 }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

// Match by normalized exercise name so all variants are merged
function computeMetrics(nameKey) {
  const points = [];
  for (const s of allSessions) {
    const ex = (s.exercises || []).find(
      e => e.exerciseName.trim().toLowerCase() === nameKey
    );
    if (!ex) continue;
    const completedSets = (ex.sets || []).filter(set => set.completed);
    if (!completedSets.length) continue;

    const date = tsToDate(s.startedAt);
    let volume = 0, maxWeight = 0, e1rm = 0;
    for (const set of completedSets) {
      const w = set.weight || 0;
      const r = set.reps   || 0;
      volume += w * r;
      if (w > maxWeight) maxWeight = w;
      const est = w * (1 + r / 30);
      if (est > e1rm) e1rm = est;
    }
    points.push({ date, volume, maxWeight, e1rm: Math.round(e1rm * 10) / 10 });
  }
  return points.sort((a, b) => a.date - b.date);
}

function fmtDate(d) {
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
}

function getRow(key) {
  for (const row of document.querySelectorAll('.prog-ex-row')) {
    if (row.dataset.key === key) return row;
  }
  return null;
}

// ── Render list ───────────────────────────────────────────

function renderSearchResults(q) {
  const results  = document.getElementById('prog-results');
  const tracked  = getTrackedExercises();
  const filtered = q
    ? tracked.filter(e => e.name.toLowerCase().includes(q.toLowerCase()))
    : tracked;

  if (!filtered.length) {
    results.innerHTML = `
      <div class="ex-empty">
        <p>${q ? 'No matching exercises' : 'No sessions logged yet'}</p>
        <span>${q ? '' : 'Import history or log a workout first'}</span>
      </div>`;
    activeKey = null;
    if (chart) { chart.destroy(); chart = null; }
    return;
  }

  results.innerHTML = filtered.map(e => `
    <div class="prog-ex-row" data-key="${e.key}">
      <div class="prog-ex-item">
        <span class="prog-ex-name">${e.name}<span class="prog-ex-count"> · ${e.count} session${e.count !== 1 ? 's' : ''}</span></span>
        <svg class="prog-ex-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </div>
      <div class="prog-expand" style="display:none">
        <div class="prog-toggles">
          <button class="prog-toggle active" data-metric="volume">Volume</button>
          <button class="prog-toggle" data-metric="maxWeight">Max Weight</button>
          <button class="prog-toggle" data-metric="e1rm">Est. 1RM</button>
        </div>
        <div class="prog-chart-wrap">
          <canvas class="prog-canvas"></canvas>
          <div class="prog-chart-msg" style="display:none">
            Log at least 2 sessions to see your chart
          </div>
        </div>
        <div class="prog-summary"></div>
      </div>
    </div>`).join('');

  results.querySelectorAll('.prog-ex-item').forEach(item => {
    item.addEventListener('click', () => {
      const row = item.closest('.prog-ex-row');
      toggleExercise(row.dataset.key);
    });
  });

  results.querySelectorAll('.prog-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const row = btn.closest('.prog-ex-row');
      if (row.dataset.key !== activeKey) return;
      row.querySelectorAll('.prog-toggle').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeMetric = btn.dataset.metric;
      renderChartInto(row);
    });
  });
}

// ── Accordion toggle ──────────────────────────────────────

function toggleExercise(key) {
  const prevKey = activeKey;

  // Close previously open row
  if (prevKey) {
    const prevRow = getRow(prevKey);
    if (prevRow) {
      prevRow.querySelector('.prog-expand').style.display  = 'none';
      prevRow.querySelector('.prog-ex-chevron').classList.remove('open');
    }
    if (chart) { chart.destroy(); chart = null; }
    activeKey = null;
  }

  // Same key: was already open, now closed — done
  if (key === prevKey) return;

  // Open new row
  activeKey    = key;
  activeMetric = 'volume';

  const row = getRow(key);
  if (!row) return;

  row.querySelectorAll('.prog-toggle').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.metric === 'volume');
  });

  row.querySelector('.prog-expand').style.display = 'block';
  row.querySelector('.prog-ex-chevron').classList.add('open');

  renderChartInto(row);
}

function renderChartInto(row) {
  const key     = row.dataset.key;
  const points  = computeMetrics(key);
  const canvas  = row.querySelector('.prog-canvas');
  const msg     = row.querySelector('.prog-chart-msg');
  const summary = row.querySelector('.prog-summary');

  if (points.length < 2) {
    canvas.style.display = 'none';
    msg.style.display    = 'flex';
    summary.innerHTML    = '';
    if (chart) { chart.destroy(); chart = null; }
    return;
  }

  canvas.style.display = 'block';
  msg.style.display    = 'none';

  const labels = points.map(p => fmtDate(p.date));
  const values = points.map(p => p[activeMetric]);

  const ctx      = canvas.getContext('2d');
  const gradient = ctx.createLinearGradient(0, 0, 0, 200);
  gradient.addColorStop(0, 'rgba(59,130,246,0.35)');
  gradient.addColorStop(1, 'rgba(59,130,246,0)');

  if (chart) { chart.destroy(); chart = null; }

  chart = new window.Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        data: values,
        borderColor: '#3b82f6',
        backgroundColor: gradient,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#3b82f6',
        pointBorderColor: '#1a1a1a',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 7,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#2a2a2a',
          borderColor: '#3a3a3a',
          borderWidth: 1,
          titleColor: '#9ca3af',
          bodyColor: '#ffffff',
          bodyFont: { size: 15, weight: '700' },
          callbacks: {
            title: items => items[0].label,
            label: item => ` ${Math.round(item.raw * 10) / 10} kg`
          }
        }
      },
      scales: {
        x: {
          ticks: { color: '#9ca3af', font: { size: 11 }, maxTicksLimit: 6 },
          grid:  { color: '#2f2f2f' },
          border: { color: '#3a3a3a' }
        },
        y: {
          ticks: {
            color: '#9ca3af',
            font: { size: 11 },
            callback: v => `${v} kg`
          },
          grid:  { color: '#2f2f2f' },
          border: { color: '#3a3a3a' }
        }
      }
    }
  });

  const best     = Math.max(...values);
  const lastDate = fmtDate(points[points.length - 1].date);
  summary.innerHTML = `
    <div class="prog-stats">
      <div class="fin-stat">
        <span class="fin-stat-label">Sessions</span>
        <span class="fin-stat-value">${points.length}</span>
      </div>
      <div class="fin-stat">
        <span class="fin-stat-label">All-time best</span>
        <span class="fin-stat-value">${Math.round(best * 10) / 10} kg</span>
      </div>
      <div class="fin-stat">
        <span class="fin-stat-label">Last session</span>
        <span class="fin-stat-value">${lastDate}</span>
      </div>
    </div>`;
}

// ── History import ────────────────────────────────────────

async function checkImportNeeded() {
  const snap = await getDocs(SESSIONS_COL);
  const alreadyImported = snap.docs.some(d => {
    const ts = d.data().startedAt;
    if (!ts) return false;
    const date = tsToDate(ts);
    return date.getFullYear() === 2026 && date.getMonth() === 3 && date.getDate() === 20;
  });
  if (!alreadyImported) {
    document.getElementById('prog-import-wrap').style.display = 'block';
  }
}

async function importHistory() {
  const btn = document.getElementById('prog-import-btn');
  btn.disabled    = true;
  btn.textContent = 'Importing…';
  try {
    for (const s of HISTORICAL_SESSIONS) {
      await addDoc(SESSIONS_COL, {
        routineId:       s.routineId,
        routineName:     s.routineName,
        startedAt:       Timestamp.fromDate(new Date(s.startedAt)),
        finishedAt:      Timestamp.fromDate(new Date(s.finishedAt)),
        durationSeconds: s.durationSeconds,
        exercises:       s.exercises,
      });
    }
    document.getElementById('prog-import-wrap').style.display = 'none';
    // allSessions will be updated automatically by the onSnapshot listener
  } catch (err) {
    console.error('[Progress] Import failed', err);
    btn.disabled    = false;
    btn.textContent = 'Import History';
    alert('Import failed. Check console.');
  }
}

// ── Init ──────────────────────────────────────────────────

export async function initProgress() {
  document.getElementById('prog-search').addEventListener('input', e => {
    if (chart) { chart.destroy(); chart = null; }
    activeKey = null;
    renderSearchResults(e.target.value.trim());
  });

  document.getElementById('prog-import-btn').addEventListener('click', importHistory);

  await checkImportNeeded();

  // Real-time listener: re-render list and refresh open chart on every change
  const q = query(SESSIONS_COL, orderBy('startedAt', 'desc'), limit(500));
  onSnapshot(q, snap => {
    allSessions = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    const searchVal = document.getElementById('prog-search').value.trim();
    renderSearchResults(searchVal);
    // Re-render chart for the currently open exercise, if any
    if (activeKey) {
      const row = getRow(activeKey);
      if (row) renderChartInto(row);
    }
  }, err => console.error('[Progress] onSnapshot error:', err));
}
