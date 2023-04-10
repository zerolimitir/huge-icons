import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSpeakerDisable = (
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
            d='M4.53 3.47a.75.75 0 0 0-1.06 1.06l3.47 3.472H6A2 2 0 0 0 4 10v3.998a2 2 0 0 0 2 2h2.334a2 2 0 0 1 1.2.399l4.266 3.198c1.302.976 3.152.072 3.2-1.536l2.47 2.47a.75.75 0 1 0 1.06-1.06l-16-16ZM17 6.003v7.936l-6.821-6.82L13.8 4.402c1.318-.988 3.2-.048 3.2 1.6Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpeakerDisable);
export default ForwardRef;
