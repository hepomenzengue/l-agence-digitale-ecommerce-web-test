import { apiConstant } from "../app/constants";
// util/request.ts

// Define the type for the custom configuration object
interface CustomConfig extends RequestInit {
  headers?: Record<string, string>;
}

// Generic function to make a GET request with fetch
export async function getRequest(
  path: string,
  customConfig: CustomConfig = {}
): Promise<any> {
  const defaultHeaders: Record<string, string> = {
    "Content-Type": "application/json",
  };

  // Merge default headers with custom headers
  const config: CustomConfig = {
    ...customConfig,
    headers: {
      ...defaultHeaders,
      ...customConfig.headers,
    },
  };

  const response = await fetch(`${apiConstant}/${path}`, {
    ...config,
    method: "GET",
  });

  // Throw an error if the response is not OK
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }

  // Return the response data as JSON
  return response.json();
}

// Export the getRequest function as default
export default getRequest;
