import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgProfit = (
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
            d='M12 3a8.753 8.753 0 0 0-8.114 5.469.75.75 0 0 0 1.39.562 7.253 7.253 0 0 1 13.863 1.45l-.804-.402a.75.75 0 1 0-.67 1.342l.894.447a2.748 2.748 0 0 0 2.88-.26l1.01-.758a.75.75 0 1 0-.9-1.2l-.913.685A8.752 8.752 0 0 0 12 3Zm-8.77 9.974c.032-.017.065-.031.099-.045a8.752 8.752 0 0 0 16.785 2.102.75.75 0 1 0-1.39-.562 7.253 7.253 0 0 1-13.788-1.08l.614.461a.75.75 0 1 0 .9-1.2l-1.011-.758a2.75 2.75 0 0 0-2.88-.26l-.894.447a.75.75 0 1 0 .67 1.342l.895-.447Zm9.52-6.724a.75.75 0 0 0-1.5 0v.854A2.751 2.751 0 0 0 12 12.5a1.25 1.25 0 1 1-1.25 1.25.75.75 0 0 0-1.5 0 2.75 2.75 0 0 0 2 2.646v.854a.75.75 0 0 0 1.5 0v-.854A2.751 2.751 0 0 0 12 11a1.25 1.25 0 1 1 1.25-1.25.75.75 0 0 0 1.5 0 2.75 2.75 0 0 0-2-2.646V6.25Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgProfit);
export default ForwardRef;
