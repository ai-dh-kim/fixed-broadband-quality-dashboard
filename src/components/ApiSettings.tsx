// 데이터 소스 설정 모달 (읽기전용).
// 데이터 소스 URL은 고정(내 GitHub raw quality_data.json)이며 화면에서 수정할 수 없다 — 표시만.

import { T } from '../config.ts';
import type { ApiSettings } from '../lib/settings.ts';

interface Props {
  settings: ApiSettings;
  onSave: (s: ApiSettings) => void; // 현재 읽기전용이라 미사용(상위 호환 유지)
  onClose: () => void;
}

export default function ApiSettings({ settings, onClose }: Props) {
  return (
    <div className="modal-overlay" onMouseDown={onClose}>
      <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
        <h2>{T.apiTitle}</h2>

        <label className="modal-field">
          <span>{T.apiDataUrl}</span>
          <input type="text" value={settings.dataUrl} readOnly className="readonly" aria-readonly="true" />
        </label>

        <p className="modal-note">{T.apiSecurityNote}</p>

        <div className="modal-actions">
          <div className="spacer" />
          <button className="primary" onClick={onClose}>{T.apiClose}</button>
        </div>
      </div>
    </div>
  );
}
