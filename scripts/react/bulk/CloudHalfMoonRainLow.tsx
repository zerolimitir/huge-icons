import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCloudHalfMoonRainLow = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M15.66 2.104c-1.446.397-2.698 1.507-3.277 2.906a6.228 6.228 0 0 0-.364 1.415l-.026.244.314.169c1.302.703 2.294 1.731 2.975 3.086.144.287.173.321.25.298a6.85 6.85 0 0 1 1.228-.207c1.001-.061 2.166.257 2.997.82.212.144.206.147.624-.243 1.014-.945 1.55-2.112 1.607-3.498.025-.602.008-.734-.082-.659-.094.078-.633.285-.965.371a4.38 4.38 0 0 1-.761.103c-1.945.088-3.638-1.209-4.085-3.129-.084-.363-.1-1.315-.026-1.61.05-.201.073-.198-.409-.066M11.815 18.17c-.624.651-1.107 1.386-1.239 1.884-.072.271-.071.762.003 1.011.176.59.698.934 1.421.934.93 0 1.481-.535 1.48-1.436-.001-.505-.153-.911-.564-1.505-.207-.3-.828-1.023-.897-1.045-.023-.008-.115.063-.204.157'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudHalfMoonRainLow);
export default ForwardRef;
