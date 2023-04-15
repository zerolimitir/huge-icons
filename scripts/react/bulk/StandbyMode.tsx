import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgStandbyMode = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.24 8.062C9.319 8.473 8 10.076 8 12c0 1.101.426 2.11 1.211 2.867.5.483 1.023.784 1.729.999.334.102.411.11 1.06.11s.726-.008 1.06-.11c1.412-.429 2.377-1.394 2.806-2.806.102-.334.11-.411.11-1.06s-.008-.726-.11-1.06c-.463-1.523-1.588-2.561-3.114-2.876-.379-.079-1.15-.079-1.512-.002'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStandbyMode);
export default ForwardRef;
