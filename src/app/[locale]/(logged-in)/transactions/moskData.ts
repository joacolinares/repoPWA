export interface DataTransactions {
    id: number;
    type: string;
    date: string;
    time: string;
    amount: string;
    amountFee: string;
}

export const dataTransactions = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    type: index % 2 === 0 ? 'Stake' : 'Un-Stake',
    date: '10/10/2022',
    time: '10:00',
    amount: "100.00",
    amountFee: "0.00"
}));