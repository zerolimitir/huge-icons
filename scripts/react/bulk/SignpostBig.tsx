import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSignpostBig = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.388 4.058c-.235.084-.385.202-1.308 1.031-.993.892-1.06.982-1.06 1.411 0 .224.02.315.1.458.12.214 1.793 1.735 2.1 1.909l.2.113 5.594.011c3.782.007 5.643-.003 5.748-.032.239-.064.484-.272.608-.516l.11-.217V4.774l-.11-.217c-.123-.241-.366-.45-.601-.515-.099-.028-1.991-.041-5.689-.04-4.556.001-5.567.011-5.692.056m2.282 6.999a.931.931 0 0 0-.613.648c-.085.279-.083 3.314.002 3.598.073.244.256.471.475.588l.166.089h10.96l.16-.086c.205-.111 1.845-1.615 1.99-1.826a.954.954 0 0 0 0-1.136c-.145-.211-1.785-1.715-1.99-1.826l-.16-.086-5.42-.009c-4.451-.007-5.447.002-5.57.046'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSignpostBig);
export default ForwardRef;
