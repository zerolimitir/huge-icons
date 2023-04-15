import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCloudRainLow = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.28 4.044c-3.265.367-5.791 2.831-6.222 6.07-.425 3.194 1.476 6.33 4.517 7.451.671.248 1.628.435 2.226.435h.236l.043-.17c.197-.784.641-1.538 1.439-2.45.576-.657.925-.86 1.481-.86s.905.203 1.481.86c.8.914 1.241 1.666 1.44 2.454l.044.173 1.367-.018c1.481-.02 1.622-.036 2.303-.272 2.062-.714 3.446-2.735 3.352-4.897-.101-2.339-1.708-4.223-4.029-4.724-.251-.055-.502-.073-.978-.071-.61.001-.92.044-1.446.197-.076.022-.113-.028-.331-.448-1.315-2.538-4.114-4.046-6.923-3.73m3.433 12.246c-1.147 1.28-1.448 2.163-1.03 3.02.23.471.621.67 1.317.67s1.087-.199 1.317-.67c.419-.857.112-1.754-1.033-3.02-.144-.159-.273-.29-.286-.29-.014 0-.142.131-.285.29'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudRainLow);
export default ForwardRef;
