import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPreviousArrow = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10.7 6.507c-.329.07-.842.349-3.656 1.986-2.303 1.34-3.237 1.904-3.4 2.053a1.976 1.976 0 0 0-.001 2.908c.163.15 1.081.706 3.365 2.036 1.728 1.007 3.248 1.868 3.377 1.913 1.108.39 2.32-.289 2.595-1.453.039-.167.059-.471.059-.92.001-.368.009-.67.018-.67.01 0 1.148.66 2.53 1.467 1.382.808 2.63 1.511 2.773 1.564 1.113.412 2.342-.264 2.62-1.441.088-.373.088-7.527 0-7.9a1.983 1.983 0 0 0-1.06-1.343c-.506-.249-1.034-.288-1.527-.115-.122.043-1.367.746-2.767 1.563S13.072 9.64 13.06 9.64c-.011 0-.02-.302-.021-.67 0-.998-.138-1.435-.593-1.891-.443-.441-1.2-.69-1.746-.572'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPreviousArrow);
export default ForwardRef;
