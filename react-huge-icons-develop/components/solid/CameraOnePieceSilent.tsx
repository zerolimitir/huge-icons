import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCameraOnePieceSilent = (
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
            d='M1.47 2.53a.75.75 0 0 1 1.06-1.06l20 20a.75.75 0 1 1-1.06 1.06l-1.865-1.865A3.987 3.987 0 0 1 18 21H6a4 4 0 0 1-4-4v-7c0-1.883 1.3-3.461 3.052-3.887L1.47 2.53Zm8.64 8.64a3 3 0 1 0 4.22 4.22l-4.22-4.22ZM7.824 4.764l13.841 13.84A3.987 3.987 0 0 0 22 17v-7a4 4 0 0 0-4-4h-1l-1.406-2.11A2 2 0 0 0 13.93 3h-3.86a2 2 0 0 0-1.664.89l-.582.874ZM12 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCameraOnePieceSilent);
export default ForwardRef;
