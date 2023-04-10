import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLoudspeaker = (
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
            d='M4 6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V6Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z'
            clipRule='evenodd'
        />
        <path fill='currentColor' d='M13.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z' />
    </svg>
);
const ForwardRef = forwardRef(SvgLoudspeaker);
export default ForwardRef;
