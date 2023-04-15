import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgStorage = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M13.7 5.316a.734.734 0 0 0-.398.413c-.091.219-.091 2.323 0 2.542a.748.748 0 0 0 1.396 0c.051-.122.062-.348.061-1.28-.001-1.014-.008-1.148-.075-1.291-.181-.392-.607-.558-.984-.384m4 0a.734.734 0 0 0-.398.413c-.091.219-.091 2.323 0 2.542a.748.748 0 0 0 1.396 0c.051-.122.062-.348.061-1.28-.001-1.014-.008-1.148-.075-1.291-.181-.392-.607-.558-.984-.384M2 15.117c0 2.018.015 3.227.043 3.428.247 1.773 1.679 3.192 3.443 3.413.457.058 12.571.058 13.028 0a4.008 4.008 0 0 0 3.444-3.444c.026-.204.042-1.521.042-3.423V12H2v3.117'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStorage);
export default ForwardRef;
