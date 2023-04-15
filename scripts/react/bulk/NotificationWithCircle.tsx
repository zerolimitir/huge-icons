import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgNotificationWithCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M16.44 2.058c-.642.138-1.073.373-1.542.841-.389.388-.594.725-.783 1.281-.081.24-.095.357-.095.82 0 .455.015.587.094.839.318 1.014 1.036 1.732 2.046 2.047.257.08.381.094.86.092.629-.002.801-.045 1.4-.351.244-.125.407-.25.683-.525.308-.306.393-.421.55-.742.257-.523.323-.801.323-1.36s-.066-.837-.323-1.36c-.157-.32-.243-.437-.55-.743-.306-.307-.423-.393-.743-.55a4.168 4.168 0 0 0-.62-.249c-.337-.089-.981-.108-1.3-.04M9.23 19.59a.568.568 0 0 0-.174.205c-.085.177-.031.351.236.76a3.158 3.158 0 0 0 2.126 1.384c.444.077.72.077 1.163 0a3.187 3.187 0 0 0 2.124-1.38c.27-.414.324-.586.239-.765-.136-.287.007-.274-2.95-.273-2.428.001-2.663.007-2.764.069'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgNotificationWithCircle);
export default ForwardRef;
