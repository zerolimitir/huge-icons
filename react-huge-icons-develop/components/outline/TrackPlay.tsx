import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTrackPlay = (
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
            d='m8.992 18.29.372.651-.372-.65Zm7.97-4.554-.373-.65.372.65Zm0-3.473.371-.65-.372.65ZM8.991 5.71l-.372.651.372-.651Zm.372 13.231 7.97-4.553-.745-1.303L8.62 17.64l.744 1.302Zm7.97-9.329L9.363 5.06l-.743 1.3 7.969 4.554.744-1.303Zm0 4.776c1.847-1.056 1.847-3.72 0-4.776l-.745 1.303c.84.48.84 1.69 0 2.17l.744 1.303Zm-8.714 3.25a1.25 1.25 0 0 1-1.87-1.084h-1.5c0 2.111 2.281 3.435 4.114 2.387L8.62 17.64Zm.744-12.58C7.531 4.012 5.25 5.336 5.25 7.447h1.5a1.25 1.25 0 0 1 1.87-1.085l.744-1.302ZM5.25 7.447v9.108h1.5V7.446h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTrackPlay);
export default ForwardRef;
