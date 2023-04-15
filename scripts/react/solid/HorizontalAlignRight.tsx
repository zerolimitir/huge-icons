import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHorizontalAlignRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M19.7 1.076a.734.734 0 0 0-.398.413c-.051.121-.062.342-.062 1.21V3.76h-6.752c-7.36 0-6.949-.012-7.417.225-.282.143-.675.529-.826.811-.219.411-.244.612-.244 1.966-.001 1.328.018 1.49.23 1.917.15.302.531.681.844.839.501.252.138.241 7.475.241l6.69.001v4h-3.752c-4.079 0-3.962-.006-4.417.225-.282.143-.675.529-.826.811-.219.411-.244.612-.244 1.966-.001 1.328.018 1.49.23 1.917.15.302.531.681.844.839.484.244.424.241 4.473.241l3.688.001.012 1.09c.014 1.258.028 1.316.364 1.525a.742.742 0 0 0 1.044-.275l.084-.16.012-10.12c.008-7.099-.001-10.164-.031-10.268-.088-.303-.412-.55-.721-.55a.861.861 0 0 0-.3.074'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHorizontalAlignRight);
export default ForwardRef;
