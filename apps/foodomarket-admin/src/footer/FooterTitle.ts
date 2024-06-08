import { Footer as TFooter } from "../api/footer/Footer";

export const FOOTER_TITLE_FIELD = "location";

export const FooterTitle = (record: TFooter): string => {
  return record.location?.toString() || String(record.id);
};
