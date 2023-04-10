import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCameraVideoSilent = (
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
            fillRule='evenodd'
            d='M1.47 1.47a.75.75 0 0 0 0 1.06l2.21 2.211A3.995 3.995 0 0 0 2 8v8a4 4 0 0 0 4 4h6c1.883 0 3.461-1.3 3.887-3.052l5.583 5.582a.75.75 0 1 0 1.06-1.06l-20-20a.75.75 0 0 0-1.06 0ZM16 12.94 7.06 4H12a4 4 0 0 1 4 4v4.94Zm1.5 1.5 2.507 2.506c1.018-.011 1.993-.802 1.993-2.004V9.057c0-1.813-2.219-2.69-3.46-1.367L17.5 8.8v5.64Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCameraVideoSilent);
export default ForwardRef;
