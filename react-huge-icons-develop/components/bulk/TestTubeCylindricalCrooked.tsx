import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTestTubeCylindricalCrooked = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            d='m12.889 6.142 4.97 4.97-9.112 9.11a3.514 3.514 0 1 1-4.97-4.97l9.112-9.11Zm4.141-2.485a2.343 2.343 0 1 1 3.313 3.313l-.828.828-3.313-3.313.828-.828Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M12.474 3.242a1.757 1.757 0 0 1 2.485 0l5.798 5.798a1.757 1.757 0 0 1-2.485 2.485l-5.798-5.798a1.757 1.757 0 0 1 0-2.485Zm-8.696 12.01a3.514 3.514 0 1 0 4.97 4.97l6.225-6.225-8.946-.994-2.25 2.25Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTestTubeCylindricalCrooked);
export default ForwardRef;
