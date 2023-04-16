import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMaximizeRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M14.811 2.278a.765.765 0 0 0-.551.607c-.063.335.19.739.521.83.107.03.856.045 2.279.045h2.12l-4.906 4.91c-2.699 2.701-4.935 4.968-4.97 5.038-.127.254-.048.673.162.857a.77.77 0 0 0 .805.134c.106-.044 1.576-1.488 5.059-4.97l4.91-4.909v2.12c0 1.423.015 2.172.045 2.279a.84.84 0 0 0 .191.306.742.742 0 0 0 1.244-.325c.028-.104.038-1.192.031-3.288-.011-3.074-.013-3.135-.093-3.271a1.03 1.03 0 0 0-.253-.26l-.172-.121-3.146-.006c-1.731-.004-3.205.007-3.276.024M6.579 4.28a4.752 4.752 0 0 0-4.071 3.2c-.256.75-.248.569-.248 5.52 0 4.192.005 4.525.073 4.86.397 1.966 1.841 3.41 3.807 3.807.335.068.668.073 4.86.073s4.525-.005 4.86-.073c1.929-.39 3.359-1.788 3.787-3.703.082-.368.086-.501.102-3.133.013-1.999.004-2.81-.029-2.973-.14-.674-1-.817-1.367-.227l-.093.149-.021 2.94-.02 2.94-.109.32c-.184.537-.399.878-.826 1.304-.426.426-.766.642-1.304.826l-.32.11H6.34l-.32-.11c-.538-.184-.878-.4-1.304-.826-.426-.426-.642-.766-.826-1.304l-.11-.32V8.34l.11-.32c.184-.538.4-.878.826-1.304.426-.427.767-.642 1.304-.826l.32-.109 2.92-.02c2.76-.02 2.928-.025 3.072-.097.596-.296.5-1.216-.143-1.378-.205-.051-5.033-.057-5.61-.006'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMaximizeRectangle);
export default ForwardRef;