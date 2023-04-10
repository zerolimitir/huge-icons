import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgEdit = (
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
            d='M2.25 21a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='m7.32 17.988 3.432-.49c.495-.071.954-.3 1.308-.654l6.628-6.628s-1.634 0-3.269-1.635c-1.635-1.635-1.635-3.27-1.635-3.27L7.156 11.94a2.312 2.312 0 0 0-.654 1.308l-.49 3.432a1.156 1.156 0 0 0 1.308 1.308Z'
        />
        <path
            fill='currentColor'
            d='m20.323 5.312-1.635-1.635a2.312 2.312 0 0 0-3.269 0l-1.635 1.635s0 1.634 1.635 3.269c1.635 1.635 3.27 1.635 3.27 1.635l1.634-1.635a2.312 2.312 0 0 0 0-3.27Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgEdit);
export default ForwardRef;
