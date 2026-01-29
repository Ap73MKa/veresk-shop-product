const formatCurrency = (amount: number, currencyCode: string) => {
  switch (currencyCode) {
    case "RUB":
      return `${amount.toFixed(0)} ₽`
    case "USD":
      return `$${amount.toFixed(2)}`
    case "EUR":
      return `€${amount.toFixed(2)}`
    default:
      return `${amount} ${currencyCode}`
  }
}

export { formatCurrency }
