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
            d='m13.8 4.403-4.267 3.2a2 2 0 0 1-1.2.399H6A2 2 0 0 0 4 10v3.998a2 2 0 0 0 2 2h2.334a2 2 0 0 1 1.2.399l4.266 3.199c1.318.988 3.2.048 3.2-1.6V6.003c0-1.648-1.882-2.588-3.2-1.6Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='m9.533 16.398 4.267 3.198c1.302.976 3.152.072 3.2-1.536l2.47 2.47a.75.75 0 1 0 1.06-1.06l-16-16a.75.75 0 0 0-1.06 1.06l3.47 3.472H6A2 2 0 0 0 4 10v3.998a2 2 0 0 0 2 2h2.334a2 2 0 0 1 1.2.399Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpeakerDisable);
export default ForwardRef;
