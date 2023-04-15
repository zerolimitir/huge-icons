import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgChatPlus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.7 8.316a.734.734 0 0 0-.398.413c-.051.123-.062.354-.062 1.33v1.181l-1.19.001c-1.071.001-1.206.008-1.35.075a.745.745 0 0 0 .029 1.382c.123.051.354.062 1.33.062h1.181l.001 1.19c.001 1.071.008 1.206.075 1.35a.743.743 0 0 0 1.368 0c.067-.144.074-.279.075-1.35l.001-1.19 1.19-.001c1.071-.001 1.206-.008 1.35-.075a.743.743 0 0 0 0-1.368c-.144-.067-.279-.074-1.35-.075l-1.19-.001-.001-1.19c-.001-1.071-.008-1.206-.075-1.35-.181-.392-.607-.558-.984-.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatPlus);
export default ForwardRef;
