import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMobilePayment = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M12 11v4.003l3.21-.012c3.191-.012 3.211-.012 3.44-.099a2.112 2.112 0 0 0 1.244-1.248c.085-.22.086-.265.086-2.644 0-2.395-.001-2.422-.088-2.65a2.112 2.112 0 0 0-1.248-1.244c-.221-.084-.265-.086-3.434-.097L12 6.997V11m-.42 7.095a.976.976 0 0 0-.578.905c0 .555.444.999.998.999a.998.998 0 1 0-.42-1.904'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMobilePayment);
export default ForwardRef;
