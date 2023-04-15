import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgReplyRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M10.658 7.342c-.109.056-.873.556-1.698 1.11-1.024.688-1.528 1.051-1.589 1.142a.737.737 0 0 0-.113.548c.028.15 2.089 3.283 2.267 3.445.284.26.738.228 1.023-.072a.683.683 0 0 0 .212-.52c0-.207-.031-.263-.689-1.249-.306-.458-.548-.843-.537-.854.03-.029.536.061 1.066.19 2.249.549 3.876 1.834 4.416 3.49.111.339.224 1.017.225 1.353.002.607.543.995 1.061.76.366-.167.48-.435.445-1.052-.171-2.99-2.443-5.281-6.042-6.091a4.694 4.694 0 0 1-.45-.114c-.009-.009.261-.2.6-.425.339-.225.654-.449.699-.497.358-.381.213-.997-.283-1.204-.212-.088-.386-.077-.613.04'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgReplyRectangle);
export default ForwardRef;
