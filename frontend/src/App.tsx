import { Toaster } from "react-hot-toast";
import { AppRoute } from "./routes/AppRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient()

export default function App() {
  return (
    <div data-theme="forest" className="min-h-screen bg-base-300">
       <QueryClientProvider client={queryClient}>
          <Toaster />
          <AppRoute/>
          <ReactQueryDevtools initialIsOpen={false} />
       </QueryClientProvider>
    </div>
  )
}
