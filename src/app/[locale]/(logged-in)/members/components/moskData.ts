export interface DataMembers {
    level: number
    numberOfMembers: number
    totalStaking: string
    residual: string,
    membersInfo: { wallet: string, name: string, sponsor: string, totalStaking: string, walletInfo: { status: string, period: string, investment: number | null, startDate: string }[] }[]
}

export const dataLevelsMock: DataMembers[] = [
    {
        level: 1,
        numberOfMembers: 11,
        totalStaking: "20,000.00",
        residual: "2,000.00",
        membersInfo: [
            {
                wallet: "1",
                name: "Analilia",
                sponsor: "Admin",
                totalStaking: "2,000.00",
                walletInfo: [
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                ]
            },
            {
                wallet: "2",
                name: "Cristian",
                sponsor: "Admin",
                totalStaking: "2,000.00",
                walletInfo: [
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                ]
            },
            {
                wallet: "3",
                name: "Cristina",
                sponsor: "Admin",
                totalStaking: "2,000.00",
                walletInfo: [
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                ]
            },
            {
                wallet: "4",
                name: "Analilia",
                sponsor: "Admin",
                totalStaking: "2,000.00",
                walletInfo: [
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                ]
            },
            {
                wallet: "5",
                name: "Cristian",
                sponsor: "Admin",
                totalStaking: "2,000.00",
                walletInfo: [
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                ]
            },
            {
                wallet: "6",
                name: "Cristina",
                sponsor: "Admin",
                totalStaking: "2,000.00",
                walletInfo: [
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                ]
            },
            {
                wallet: "7",
                name: "Analilia",
                sponsor: "Admin",
                totalStaking: "2,000.00",
                walletInfo: [
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                ]
            },
            {
                wallet: "8",
                name: "Cristian",
                sponsor: "Admin",
                totalStaking: "2,000.00",
                walletInfo: [
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                ]
            },
            {
                wallet: "9",
                name: "Cristina",
                sponsor: "Admin",
                totalStaking: "2,000.00",
                walletInfo: [
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                ]
            }
        ]
    },
    {
        level: 2,
        numberOfMembers: 8,
        totalStaking: "5,000.00",
        residual: "500.00",
        membersInfo: [
            {
                wallet: "1",
                name: "Analilia2",
                sponsor: "Admin",
                totalStaking: "2,000.00",
                walletInfo: [
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                ]
            },
            {
                wallet: "2",
                name: "Cristian2",
                sponsor: "Admin",
                totalStaking: "2,000.00",
                walletInfo: [
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                ]
            },
            {
                wallet: "3",
                name: "Cristina2",
                sponsor: "Admin",
                totalStaking: "2,000.00",
                walletInfo: [
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                ]
            }
        ]
    },
    {
        level: 3,
        numberOfMembers: 13,
        totalStaking: "10,000.00",
        residual: "1,000.00",
        membersInfo: [
            {
                wallet: "1",
                name: "Analili3",
                sponsor: "Admin",
                totalStaking: "2,000.00",
                walletInfo: [
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                ]
            },
            {
                wallet: "2",
                name: "Cristian3",
                sponsor: "Admin",
                totalStaking: "2,000.00",
                walletInfo: [
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                ]
            },
            {
                wallet: "3",
                name: "Cristina3",
                sponsor: "Admin",
                totalStaking: "2,000.00",
                walletInfo: [
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                ]
            }
        ]
    },
    {
        level: 4,
        numberOfMembers: 14,
        totalStaking: "200,000.00",
        residual: "20,000.00",
        membersInfo: [
            {
                wallet: "1",
                name: "Analilia4",
                sponsor: "Admin",
                totalStaking: "2,000.00",
                walletInfo: [
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                ]
            },
            {
                wallet: "2",
                name: "Cristian4",
                sponsor: "Admin",
                totalStaking: "2,000.00",
                walletInfo: [
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                ]
            },
            {
                wallet: "3",
                name: "Cristina4",
                sponsor: "Admin",
                totalStaking: "2,000.00",
                walletInfo: [
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                    {
                        status: 'Active',
                        period: '6 months',
                        investment: 10.000,
                        startDate: '01/01/24',
                    },
                ]
            }
        ]
    },
]