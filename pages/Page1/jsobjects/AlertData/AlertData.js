export default {
	getAlerts: () => [
		{
			id: "AL-001",
			service: "Nginx",
			severity: "High",
			status: "Triggered",
			timestamp: "2025-07-25T10:01:00Z"
		},
		{
			id: "AL-002",
			service: "Redis",
			severity: "Medium",
			status: "Acknowledged",
			timestamp: "2025-07-25T09:45:00Z"
		},
		{
			id: "AL-003",
			service: "Postgres",
			severity: "Low",
			status: "Resolved",
			timestamp: "2025-07-25T08:22:00Z"
		},
		{
			id: "AL-004",
			service: "Kafka",
			severity: "High",
			status: "Triggered",
			timestamp: "2025-07-25T07:55:00Z"
		},
		{
			id: "AL-005",
			service: "MongoDB",
			severity: "Medium",
			status: "Acknowledged",
			timestamp: "2025-07-25T07:30:00Z"
		},
		{
			id: "AL-006",
			service: "NodeJS App",
			severity: "Low",
			status: "Resolved",
			timestamp: "2025-07-25T06:50:00Z"
		},
		{
			id: "AL-007",
			service: "Payment Gateway",
			severity: "High",
			status: "Triggered",
			timestamp: "2025-07-25T06:20:00Z"
		},
		{
			id: "AL-008",
			service: "Load Balancer",
			severity: "Medium",
			status: "Acknowledged",
			timestamp: "2025-07-25T06:00:00Z"
		}
	]
}
