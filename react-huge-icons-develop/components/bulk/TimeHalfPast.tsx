import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTimeHalfPast = (
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
            d='M11.25 2a.75.75 0 0 1 .75-.75c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75a.75.75 0 0 1 0-1.5 9.25 9.25 0 0 0 0-18.5.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M9.133 2.387a.75.75 0 0 1-.433.969 9.177 9.177 0 0 0-.479.198.75.75 0 0 1-.613-1.369c.183-.082.369-.159.557-.23a.75.75 0 0 1 .968.432ZM5.675 4.218a.75.75 0 0 1-.03 1.06 9.317 9.317 0 0 0-.367.367.75.75 0 0 1-1.09-1.03c.139-.146.28-.289.427-.427a.75.75 0 0 1 1.06.03ZM3.177 7.23a.75.75 0 0 1 .377.991c-.07.158-.136.317-.198.48a.75.75 0 1 1-1.402-.536c.072-.188.15-.374.232-.557a.75.75 0 0 1 .99-.378Zm-1.152 3.739a.75.75 0 0 1 .729.77 9.435 9.435 0 0 0 0 .521.75.75 0 0 1-1.5.042 10.946 10.946 0 0 1 0-.604.75.75 0 0 1 .77-.729Zm.362 3.898a.75.75 0 0 1 .969.433c.062.162.128.321.198.479a.75.75 0 1 1-1.368.613c-.083-.183-.16-.369-.232-.557a.75.75 0 0 1 .433-.968Zm1.831 3.458a.75.75 0 0 1 1.06.03 9.4 9.4 0 0 0 .367.367.75.75 0 1 1-1.03 1.09c-.146-.139-.288-.28-.427-.427a.75.75 0 0 1 .03-1.06Zm3.012 2.498a.75.75 0 0 1 .991-.377c.158.07.317.136.48.198a.75.75 0 1 1-.536 1.402 10.608 10.608 0 0 1-.557-.232.75.75 0 0 1-.378-.99ZM12 12.75a.75.75 0 0 1 .75.75V16a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75Zm0-7.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
        />
        <path fill='currentColor' d='M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' opacity={0.4} />
    </svg>
);
const ForwardRef = forwardRef(SvgTimeHalfPast);
export default ForwardRef;
