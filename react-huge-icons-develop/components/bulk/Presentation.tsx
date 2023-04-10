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
            d='M12.75 17.996V22a.75.75 0 0 1-1.5 0v-4.004h1.5Z'
            clipRule='evenodd'
        />
        <path fill='currentColor' d='M3 5h18v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Z' opacity={0.4} />
        <path fill='currentColor' d='M2 4a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Z' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M16.386 9.357a.75.75 0 0 1 .257 1.029l-1.082 1.804a2.53 2.53 0 0 1-4.146.279 1.031 1.031 0 0 0-1.69.113l-1.082 1.804a.75.75 0 1 1-1.286-.772l1.082-1.804a2.53 2.53 0 0 1 4.147-.278 1.03 1.03 0 0 0 1.689-.114l1.082-1.804a.75.75 0 0 1 1.029-.257Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPresentation);
export default ForwardRef;
