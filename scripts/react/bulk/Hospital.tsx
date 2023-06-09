import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHospital = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.7 4.316a.734.734 0 0 0-.398.413c-.051.123-.062.354-.062 1.33V7.24l-1.19.001c-1.071.001-1.206.008-1.35.075a.745.745 0 0 0 .029 1.382c.123.051.354.062 1.33.062h1.181l.001 1.19c.001 1.071.008 1.206.075 1.35a.743.743 0 0 0 1.368 0c.067-.144.074-.279.075-1.35l.001-1.19 1.19-.001c1.071-.001 1.206-.008 1.35-.075a.743.743 0 0 0 0-1.368c-.144-.067-.279-.074-1.35-.075l-1.19-.001-.001-1.19c-.001-1.071-.008-1.206-.075-1.35-.181-.392-.607-.558-.984-.384m-.32 9.741c-1.159.268-2.007 1.094-2.299 2.239-.077.3-.081.442-.081 2.63v2.314H6.022c-2.024 0-3.044.014-3.184.044-.758.163-.758 1.269 0 1.432.292.062 18.032.062 18.324 0 .758-.163.758-1.269 0-1.432-.14-.03-1.16-.044-3.182-.044h-2.976l-.013-2.41c-.012-2.402-.012-2.411-.106-2.69-.335-1.005-1.038-1.707-2.025-2.02-.358-.113-1.122-.146-1.48-.063'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHospital);
export default ForwardRef;
