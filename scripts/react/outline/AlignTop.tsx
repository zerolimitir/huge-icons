import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgAlignTop = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M4.815 4.278c-.484.115-.717.726-.432 1.13a.939.939 0 0 0 .277.248l.16.084 7.06.011c5.04.007 7.121-.002 7.274-.034.748-.155.775-1.244.035-1.431-.211-.053-14.154-.061-14.374-.008M7.9 8.258a1.99 1.99 0 0 1-.16.042c-.087.019-.425.33-1.212 1.113-.601.598-1.131 1.148-1.177 1.223-.119.19-.116.541.005.738.176.285.485.41.83.337.165-.036.246-.096.621-.461l.431-.421.011 4.196.011 4.195.093.149c.357.574 1.223.443 1.363-.207.03-.143.044-1.453.044-4.27v-4.065l.432.422c.375.365.457.426.62.461.576.123 1.02-.321.899-.9-.038-.179-.106-.257-1.143-1.299-.606-.61-1.158-1.135-1.225-1.167-.132-.062-.378-.109-.443-.086m8 0a1.99 1.99 0 0 1-.16.042c-.087.019-.425.33-1.212 1.113-.601.598-1.131 1.148-1.177 1.223-.119.19-.116.541.005.738.176.285.485.41.83.337.165-.036.246-.096.621-.461l.431-.421.011 4.196.011 4.195.093.149c.357.574 1.223.443 1.363-.207.03-.143.044-1.453.044-4.27v-4.065l.432.422c.375.365.457.426.62.461.576.123 1.02-.321.899-.9-.038-.179-.106-.257-1.143-1.299-.606-.61-1.158-1.135-1.225-1.167-.132-.062-.378-.109-.443-.086'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAlignTop);
export default ForwardRef;
