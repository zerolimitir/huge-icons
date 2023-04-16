import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBarChartMiddleLong = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M11.66 2.278A2.76 2.76 0 0 0 9.352 4.26l-.092.32v14.84l.092.32a2.777 2.777 0 0 0 1.908 1.903c.647.177 1.484.09 2.02-.211.684-.383 1.161-.973 1.368-1.692l.092-.32V4.58l-.092-.32a2.763 2.763 0 0 0-2.988-1.982m.794 1.563c.29.109.596.415.705.705.08.215.081.28.081 7.454 0 7.174-.001 7.239-.081 7.454-.172.458-.655.786-1.159.786-.505 0-.987-.328-1.159-.787-.081-.217-.082-.256-.071-7.526l.01-7.307.087-.162c.157-.293.484-.573.773-.661.198-.06.592-.039.814.044M3.66 7.278A2.76 2.76 0 0 0 1.352 9.26l-.092.32v9.84l.092.32c.207.719.684 1.309 1.368 1.692.714.4 1.846.4 2.56 0 .684-.383 1.161-.973 1.368-1.692l.092-.32V9.58l-.092-.32A2.763 2.763 0 0 0 3.66 7.278m16 0a2.76 2.76 0 0 0-2.308 1.982l-.092.32v9.84l.092.32c.207.719.684 1.309 1.368 1.692.714.4 1.846.4 2.56 0 .684-.383 1.161-.973 1.368-1.692l.092-.32V9.58l-.092-.32a2.763 2.763 0 0 0-2.988-1.982M4.454 8.841c.29.109.596.415.705.705.08.214.081.292.081 4.954s-.001 4.74-.081 4.954c-.109.29-.415.596-.705.705-.641.24-1.381-.084-1.613-.707-.081-.216-.082-.268-.072-5.025L2.78 9.62l.087-.162c.157-.293.484-.573.773-.661.198-.06.592-.039.814.044m16 0c.29.109.596.415.705.705.08.214.081.292.081 4.954s-.001 4.74-.081 4.954c-.109.29-.415.596-.705.705-.641.24-1.381-.084-1.613-.707-.081-.216-.082-.268-.072-5.025l.011-4.807.087-.162c.157-.293.484-.573.773-.661.198-.06.592-.039.814.044'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBarChartMiddleLong);
export default ForwardRef;