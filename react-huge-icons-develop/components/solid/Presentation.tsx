import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPresentation = (
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
            d='M3.5 2a1.5 1.5 0 1 0 0 3h17a1.5 1.5 0 0 0 0-3h-17ZM21 6.5H3V16a2 2 0 0 0 2 2h6.25v4a.75.75 0 0 0 1.5 0v-4H19a2 2 0 0 0 2-2V6.5Zm-4.357 3.886a.75.75 0 0 0-1.286-.772l-1.082 1.804a1.03 1.03 0 0 1-1.69.114 2.53 2.53 0 0 0-4.146.278l-1.082 1.804a.75.75 0 0 0 1.286.772l1.082-1.804a1.03 1.03 0 0 1 1.69-.113 2.53 2.53 0 0 0 4.146-.28l1.082-1.803Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPresentation);
export default ForwardRef;
