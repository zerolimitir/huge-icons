import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFlashAuto = (
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
        <path fill='currentColor' d='M3 13.5 12 2v8.5h5L8 22v-8.5H3Z' opacity={0.4} />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M18.5 1.25a.75.75 0 0 1 .692.462l2.5 6a.75.75 0 0 1-1.384.576l-.641-1.538h-2.334l-.64 1.538a.75.75 0 0 1-1.385-.576l2.5-6a.75.75 0 0 1 .692-.462Zm-.542 4h1.084l-.542-1.3-.542 1.3Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFlashAuto);
export default ForwardRef;
