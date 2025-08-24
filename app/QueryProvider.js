import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const QueryProvider = ({ children }) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60 * 10000
            }
        }
    })
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default QueryProvider