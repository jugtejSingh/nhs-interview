//All the data.
const options = ["troubleshooting", "challenge", "incident"]

const scenarioData = {
    technology: {
        'Cloud Computing': {
            "troubleshooting": [
                'Investigate intermittent connection timeouts to cloud database',
                'Debug auto-scaling policies not triggering during traffic spikes',
                'Resolve cross-region replication lag issues'
            ],
            "challenge": [
                'Optimize cloud costs while maintaining performance requirements',
                'Implement disaster recovery across multiple cloud regions',
                'Migrate legacy applications to cloud-native architecture'
            ],
            "incident": [
                'Complete cloud service outage affecting all regions',
                'Data corruption detected in primary cloud storage',
                'Security breach through misconfigured cloud permissions'
            ]
        },
        'Cybersecurity': {
            "troubleshooting": [
                'Analyze suspicious network traffic patterns and identify source',
                'Investigate potential malware infections on corporate devices',
                'Debug authentication failures in multi-factor authentication system'
            ],
            "challenge": [
                'Implement zero-trust security architecture across organization',
                'Develop incident response plan for advanced persistent threats',
                'Balance security requirements with user accessibility needs'
            ],
            "incident": [
                'Ransomware attack encrypted critical business systems',
                'Data breach exposed customer personal information',
                'Insider threat detected accessing unauthorized systems'
            ]
        },
        'DevOps': {
            "troubleshooting": [
                'Fix broken CI/CD pipeline preventing deployments',
                'Resolve container orchestration cluster networking issues',
                'Debug infrastructure-as-code template validation errors'
            ],
            "challenge": [
                'Implement blue-green deployment strategy for zero-downtime releases',
                'Optimize build and deployment pipeline performance',
                'Establish comprehensive monitoring and alerting across all environments'
            ],
            "incident": [
                'Production deployment caused complete service outage',
                'Configuration management system corrupted environment settings',
                'Container registry compromise affected multiple applications'
            ]
        }
    },

    role: {
        'System Administrator': {
            troubleshooting: [
                'Diagnose server performance degradation during peak hours',
                'Resolve network connectivity issues between office locations',
                'Fix backup system failing to complete scheduled operations'
            ],
            challenge: [
                'Upgrade aging server infrastructure with minimal downtime',
                'Implement centralized logging and monitoring solution',
                'Establish disaster recovery procedures for critical systems'
            ],
            incident: [
                'Primary domain controller failed causing authentication outage',
                'Storage array experienced hardware failure losing data',
                'Power outage caused unplanned shutdown of data center'
            ]
        },
        'Software Engineer': {
            troubleshooting: [
                'Debug memory leaks causing application crashes in production',
                'Resolve API performance issues under high load conditions',
                'Fix database deadlocks occurring during concurrent operations'
            ],
            challenge: [
                'Refactor monolithic application into microservices architecture',
                'Implement caching strategy to improve application performance',
                'Optimize database queries and indexing for large datasets'
            ],
            incident: [
                'Critical security vulnerability discovered in production code',
                'Database corruption caused data integrity issues',
                'Third-party API integration failure disrupted core functionality'
            ]
        },
        'Security Analyst': {
            troubleshooting: [
                'Investigate anomalous user behavior patterns in access logs',
                'Analyze firewall rules blocking legitimate business traffic',
                'Debug certificate validation errors in SSL/TLS connections'
            ],
            challenge: [
                'Develop threat hunting procedures for advanced attacks',
                'Implement security information and event management (SIEM) system',
                'Create security awareness training program for employees'
            ],
            incident: [
                'Advanced persistent threat detected in corporate network',
                'Compliance audit revealed multiple security control failures',
                'Social engineering attack compromised executive credentials'
            ]
        }
    },

    environment: {
        'Enterprise Network': {
            troubleshooting: [
                'Resolve VLAN configuration issues causing connectivity problems',
                'Debug DNS resolution failures affecting internal services',
                'Fix Quality of Service (QoS) policies not prioritizing critical traffic'
            ],
            challenge: [
                'Implement network segmentation for improved security posture',
                'Upgrade network infrastructure to support increased bandwidth requirements',
                'Establish redundant network paths for high availability'
            ],
            incident: [
                'Core network switch failure isolated entire office building',
                'DDoS attack overwhelmed internet gateway causing outage',
                'Network cable damage during construction disrupted connectivity'
            ]
        },
        'Cloud Infrastructure': {
            troubleshooting: [
                'Resolve load balancer health check failures for application instances',
                'Debug auto-scaling group not responding to CloudWatch metrics',
                'Fix VPC peering connection issues between environments'
            ],
            challenge: [
                'Implement multi-cloud strategy for vendor risk mitigation',
                'Optimize cloud resource allocation and cost management',
                'Establish cloud security best practices and compliance controls'
            ],
            incident: [
                'Cloud provider service disruption affected multiple availability zones',
                'Misconfigured security group exposed databases to internet',
                'Cloud storage deletion incident caused permanent data loss'
            ]
        },
        'On-Prem Data Center': {
            troubleshooting: [
                'Diagnose cooling system inefficiencies causing server overheating',
                'Resolve SAN storage performance issues affecting virtual machines',
                'Fix UPS battery backup system not providing adequate runtime'
            ],
            challenge: [
                'Implement virtualization consolidation to reduce hardware footprint',
                'Upgrade power and cooling infrastructure for increased capacity',
                'Establish remote management capabilities for critical systems'
            ],
            incident: [
                'Fire suppression system activated causing emergency data center shutdown',
                'Primary power feed failure caused partial facility outage',
                'Flood damage compromised ground floor server equipment'
            ]
        }
    }
};
module.exports = {
    scenarioData,
    options
};