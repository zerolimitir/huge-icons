import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgOutRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M17.807 8.289c-.375.08-.606.481-.517.901.037.177.102.253.963 1.12l.923.93-5.158.001c-4.929.001-5.165.004-5.318.075a.743.743 0 0 0 0 1.368c.153.071.389.074 5.319.075l5.159.001-.924.93c-.994 1-1.043 1.069-1.003 1.415a.74.74 0 0 0 1.049.579c.107-.05.694-.612 1.766-1.69 1.529-1.537 1.607-1.623 1.645-1.804a.935.935 0 0 0 0-.38c-.038-.181-.115-.266-1.643-1.799-.883-.885-1.659-1.635-1.726-1.665a.795.795 0 0 0-.535-.057'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgOutRectangle);
export default ForwardRef;
