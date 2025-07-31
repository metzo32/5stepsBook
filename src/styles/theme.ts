// emotion 전용테마

import type {} from "@mui/x-date-pickers/themeAugmentation";
const theme = {
  colors: {
    primary: "#2563EB",       // 파란색 중심 (버튼, 강조 텍스트 등)
    primaryLight: "#3B82F6",  // primary의 hover/active 상태
    primaryDark: "#1E40AF",   // primary의 어두운 버전

    secondary: "#64748B",     // 중립 보조 컬러 (버튼 보조, 아이콘)
    secondaryLight: "#94A3B8",
    secondaryDark: "#475569",

    background: "#F8FAFC",   
    surface: "#FFFFFF",      

    textPrimary: "#1E293B",   // 본문 주요 텍스트
    textSecondary: "#475569", // 부가 텍스트
    textInverted: "#FFFFFF",  // primary 버튼 등 어두운 배경 위 텍스트

    border: "#CBD5E1",        // 테두리, 구분선

    error: "#EF4444",         // 에러 메시지, 강조
    warning: "#F59E0B",       // 경고 메시지
    success: "#10B981",       // 성공 메시지
    info: "#0EA5E9",          // 정보 메시지

    disabledBg: "#E2E8F0",     
    disabledText: "#adafb2",   
  },
};

export default theme;

export type AppTheme = typeof theme;
