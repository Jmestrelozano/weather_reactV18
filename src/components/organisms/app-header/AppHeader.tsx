import { ReactNode } from "react";
import { Text } from "../../atoms/text/Text";

export interface AppHeaderProps {
  unitsControl: ReactNode;
}

export const AppHeader = ({ unitsControl }: AppHeaderProps) => {
  return (
    <header className="flex items-center justify-between w-full">
      <div className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-orange-500 shadow-[0_0_18px_rgba(251,146,60,0.45)]">
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" aria-hidden="true" fill="currentColor">
            <circle cx="12" cy="12" r="4" />
            <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="12" y1="2" x2="12" y2="4" />
              <line x1="12" y1="20" x2="12" y2="22" />
              <line x1="2" y1="12" x2="4" y2="12" />
              <line x1="20" y1="12" x2="22" y2="12" />
              <line x1="4.9" y1="4.9" x2="6.3" y2="6.3" />
              <line x1="17.7" y1="17.7" x2="19.1" y2="19.1" />
              <line x1="4.9" y1="19.1" x2="6.3" y2="17.7" />
              <line x1="17.7" y1="6.3" x2="19.1" y2="4.9" />
            </g>
          </svg>
        </span>
        <Text as="span" className="text-white text-lg font-semibold tracking-tight">
          Weather Now
        </Text>
      </div>
      {unitsControl}
    </header>
  );
};
