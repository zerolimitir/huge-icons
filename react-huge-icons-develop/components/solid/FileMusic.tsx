import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFileMusic = (
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
            d='M3 18V6a4 4 0 0 1 4-4h4.343a4 4 0 0 1 .907.104V6A4.75 4.75 0 0 0 17 10.75h3.896c.069.295.104.6.104.907V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4ZM13.75 6V2.805c.148.112.289.234.422.367l5.656 5.656c.133.133.255.274.367.422H17A3.25 3.25 0 0 1 13.75 6ZM13 12.75c.69 0 1.25.56 1.25 1.25v.05a.75.75 0 0 0 1.5 0V14A2.75 2.75 0 0 0 13 11.25 1.75 1.75 0 0 0 11.25 13v1.378a2.25 2.25 0 1 0 1.5 2.122V13a.25.25 0 0 1 .25-.25Zm-2.5 3a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileMusic);
export default ForwardRef;
