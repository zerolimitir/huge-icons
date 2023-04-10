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
            d='M12 5.75a.75.75 0 0 1 .75.75v.854a2.75 2.75 0 0 1 2 2.646.75.75 0 0 1-1.5 0A1.25 1.25 0 1 0 12 11.25a2.75 2.75 0 0 1 .75 5.396v.854a.75.75 0 0 1-1.5 0v-.854a2.751 2.751 0 0 1-2-2.646.75.75 0 0 1 1.5 0A1.25 1.25 0 1 0 12 12.75a2.75 2.75 0 0 1-.75-5.396V6.5a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M3.886 8.719a8.753 8.753 0 0 1 16.75 1.866l.914-.685a.75.75 0 1 1 .9 1.2l-1.011.758a2.75 2.75 0 0 1-2.88.26l-.895-.447a.75.75 0 1 1 .671-1.342l.804.402a7.252 7.252 0 0 0-13.862-1.45.75.75 0 1 1-1.39-.562Zm-.557 4.46a1.228 1.228 0 0 0-.1.045l-.894.447a.75.75 0 1 1-.67-1.342l.894-.447a2.75 2.75 0 0 1 2.88.26l1.01.758a.75.75 0 1 1-.9 1.2l-.613-.46a7.253 7.253 0 0 0 13.787 1.079.75.75 0 1 1 1.39.562A8.753 8.753 0 0 1 3.33 13.18Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgProfit);
export default ForwardRef;
