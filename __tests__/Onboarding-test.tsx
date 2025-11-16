import Onboarding from "@/app/onboarding";
import { render, screen, waitFor } from "@testing-library/react-native";

jest.mock("@react-native-async-storage/async-storage", () =>
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);

const mockPrefetch = jest.fn();

jest.mock("expo-router", () => ({
  useRouter: () => ({
    prefetch: mockPrefetch,
  }),
}));

jest.mock("@expo/vector-icons/AntDesign", () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { Text } = require("react-native");

  const MockAntDesign = (props: any) => (
    <Text testID="ant-icon">{props.name}</Text>
  );
  MockAntDesign.displayName = "MockAntDesign";

  return MockAntDesign;
});

describe("<Onboarding/>", () => {
  // beforeEach(() => {
  //   jest.clearAllMocks();
  // });

  test("test", () => {
    render(<Onboarding />);

    expect(screen.getByText("Khám phá dễ dàng")).toBeTruthy();
  });
});
