import { VoidComponent } from 'solid-js'
import PageRenderer from '~/components/PageRenderer'
import Title from '~/components/Title'

const CONTENT = `
  <h1>Heading one</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique finibus nunc. Mauris eu aliquet risus. Quisque eu odio sem. Vivamus varius nulla eget pellentesque rutrum. Proin eleifend semper nulla ut condimentum. Maecenas dictum turpis eget libero tincidunt vehicula. Quisque imperdiet laoreet malesuada. Donec et lacus ante. Etiam sit amet risus eros. Phasellus auctor justo non nibh varius ultricies. Sed cursus ultrices erat, et tristique justo. Curabitur rutrum finibus laoreet. Ut consectetur mi elit, eu viverra felis cursus fermentum. Morbi tincidunt faucibus lectus quis efficitur. Donec congue id leo venenatis tincidunt. Aenean elementum metus molestie hendrerit ullamcorper.</p>
  <h2>Heading two</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique finibus nunc. Mauris eu aliquet risus. Quisque eu odio sem. Vivamus varius nulla eget pellentesque rutrum. Proin eleifend semper nulla ut condimentum. Maecenas dictum turpis eget libero tincidunt vehicula. Quisque imperdiet laoreet malesuada. Donec et lacus ante. Etiam sit amet risus eros. Phasellus auctor justo non nibh varius ultricies. Sed cursus ultrices erat, et tristique justo. Curabitur rutrum finibus laoreet. Ut consectetur mi elit, eu viverra felis cursus fermentum. Morbi tincidunt faucibus lectus quis efficitur. Donec congue id leo venenatis tincidunt. Aenean elementum metus molestie hendrerit ullamcorper.</p>
  <h3>Heading three</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique finibus nunc. Mauris eu aliquet risus. Quisque eu odio sem. Vivamus varius nulla eget pellentesque rutrum. Proin eleifend semper nulla ut condimentum. Maecenas dictum turpis eget libero tincidunt vehicula. Quisque imperdiet laoreet malesuada. Donec et lacus ante. Etiam sit amet risus eros. Phasellus auctor justo non nibh varius ultricies. Sed cursus ultrices erat, et tristique justo. Curabitur rutrum finibus laoreet. Ut consectetur mi elit, eu viverra felis cursus fermentum. Morbi tincidunt faucibus lectus quis efficitur. Donec congue id leo venenatis tincidunt. Aenean elementum metus molestie hendrerit ullamcorper.</p>
  <h4>Heading four</h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique finibus nunc. Mauris eu aliquet risus. Quisque eu odio sem. Vivamus varius nulla eget pellentesque rutrum. Proin eleifend semper nulla ut condimentum. Maecenas dictum turpis eget libero tincidunt vehicula. Quisque imperdiet laoreet malesuada. Donec et lacus ante. Etiam sit amet risus eros. Phasellus auctor justo non nibh varius ultricies. Sed cursus ultrices erat, et tristique justo. Curabitur rutrum finibus laoreet. Ut consectetur mi elit, eu viverra felis cursus fermentum. Morbi tincidunt faucibus lectus quis efficitur. Donec congue id leo venenatis tincidunt. Aenean elementum metus molestie hendrerit ullamcorper.</p>
  <h5>Heading five</h5>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique finibus nunc. Mauris eu aliquet risus. Quisque eu odio sem. Vivamus varius nulla eget pellentesque rutrum. Proin eleifend semper nulla ut condimentum. Maecenas dictum turpis eget libero tincidunt vehicula. Quisque imperdiet laoreet malesuada. Donec et lacus ante. Etiam sit amet risus eros. Phasellus auctor justo non nibh varius ultricies. Sed cursus ultrices erat, et tristique justo. Curabitur rutrum finibus laoreet. Ut consectetur mi elit, eu viverra felis cursus fermentum. Morbi tincidunt faucibus lectus quis efficitur. Donec congue id leo venenatis tincidunt. Aenean elementum metus molestie hendrerit ullamcorper.</p>
  <h6>Heading six</h6>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique finibus nunc. Mauris eu aliquet risus. Quisque eu odio sem. Vivamus varius nulla eget pellentesque rutrum. Proin eleifend semper nulla ut condimentum. Maecenas dictum turpis eget libero tincidunt vehicula. Quisque imperdiet laoreet malesuada. Donec et lacus ante. Etiam sit amet risus eros. Phasellus auctor justo non nibh varius ultricies. Sed cursus ultrices erat, et tristique justo. Curabitur rutrum finibus laoreet. Ut consectetur mi elit, eu viverra felis cursus fermentum. Morbi tincidunt faucibus lectus quis efficitur. Donec congue id leo venenatis tincidunt. Aenean elementum metus molestie hendrerit ullamcorper.</p>
  <h1>Paragraphs</h1>
  <p>Lorem ipsum dolor sit amet, <a href='#'>consectetur adipiscing elit.</a> Donec iaculis consectetur rutrum. Proin non ligula id est ultrices facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum imperdiet ex tortor, eget egestas nibh ultrices in. Proin vulputate metus eget nulla bibendum scelerisque. Quisque sit amet commodo velit. Quisque ligula tortor, varius vel nunc in, gravida euismod elit.</p>
  <p>Quisque sit amet <strong>augue id nibh dapibus pharetra</strong> in at justo. Quisque in est a <i>enim finibus gravida in at urna. Mauris eget sem</i> id erat vestibulum condimentum. Aliquam condimentum iaculis nibh, pellentesque venenatis sapien aliquet eu. Vestibulum nec turpis non magna lacinia aliquam. In dictum justo sed lorem gravida, at ultrices tortor maximus. Aenean ultrices lacinia mi, nec auctor orci tempor eu. Integer aliquet ut magna eget fermentum. Aenean non mi ex. Nunc tincidunt neque vel vulputate cursus. Nam rhoncus mattis felis, scelerisque tempus augue. Pellentesque quis neque interdum, dictum felis imperdiet, lobortis neque. In varius sagittis sollicitudin. Fusce at sem vel ligula commodo convallis vel laoreet lectus. Morbi hendrerit condimentum venenatis.</p>
  <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam porttitor aliquet ex, non dapibus orci laoreet quis. Fusce vel nunc ipsum. Pellentesque laoreet mi sem, nec tempus justo consequat sed. Vivamus vel massa blandit, fringilla massa at, condimentum felis. Phasellus quis quam quis magna egestas malesuada. Suspendisse pretium sodales orci non sodales. Maecenas placerat, ex vel blandit placerat, erat dolor mattis sapien, ut rhoncus mi lorem vel metus. Sed egestas elit a urna molestie viverra. Nulla mi ante, scelerisque eget est faucibus, convallis dictum lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed laoreet mauris massa, a malesuada arcu interdum rutrum. Suspendisse mattis tortor ut tincidunt feugiat.</p>
  <h1>Blockquotes</h1>
  <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam porttitor aliquet ex, non dapibus orci laoreet quis. Fusce vel nunc ipsum. Pellentesque laoreet mi sem, nec tempus justo consequat sed. Vivamus vel massa blandit, fringilla massa at, condimentum felis. Phasellus quis quam quis magna egestas malesuada. Suspendisse pretium sodales orci non sodales. Maecenas placerat, ex vel blandit placerat, erat dolor mattis sapien, ut rhoncus mi lorem vel metus. Sed egestas elit a urna molestie viverra. Nulla mi ante, scelerisque eget est faucibus, convallis dictum lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed laoreet mauris massa, a malesuada arcu interdum rutrum. Suspendisse mattis tortor ut tincidunt feugiat.</p>
  <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis consectetur rutrum. Proin non ligula id est ultrices facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum imperdiet ex tortor, eget egestas nibh ultrices in. Proin vulputate metus eget nulla bibendum scelerisque. Quisque sit amet commodo velit. Quisque ligula tortor, varius vel nunc in, gravida euismod elit.</blockquote>
  <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam porttitor aliquet ex, non dapibus orci laoreet quis. Fusce vel nunc ipsum. Pellentesque laoreet mi sem, nec tempus justo consequat sed. Vivamus vel massa blandit, fringilla massa at, condimentum felis. Phasellus quis quam quis magna egestas malesuada. Suspendisse pretium sodales orci non sodales. Maecenas placerat, ex vel blandit placerat, erat dolor mattis sapien, ut rhoncus mi lorem vel metus. Sed egestas elit a urna molestie viverra. Nulla mi ante, scelerisque eget est faucibus, convallis dictum lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed laoreet mauris massa, a malesuada arcu interdum rutrum. Suspendisse mattis tortor ut tincidunt feugiat.</p>
  <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis consectetur rutrum. Proin non ligula id est ultrices facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum imperdiet ex tortor, eget egestas nibh ultrices in. Proin vulputate metus eget nulla bibendum scelerisque. Quisque sit amet commodo velit. Quisque ligula tortor, varius vel nunc in, gravida euismod elit.</blockquote>
  <h1>Tables</h1>
  <table>
    <tr>
      <th>Table Heading 1</th>
      <th>Table Heading 2</th>
      <th>Table Heading 3</th>
      <th>Table Heading 4</th>
      <th>Table Heading 5</th>
      <th>Table Heading 6</th>
      <th>Table Heading 7</th>
    </tr>
    <tr>
      <td>Item 1</td>
      <td>Item 2</td>
      <td>Item 3</td>
      <td>Item 4</td>
      <td>Item 5</td>
      <td>Item 6</td>
      <td>Item 7</td>
    </tr>
    <tr>
      <td>Item 1</td>
      <td>Item 2</td>
      <td>Item 3</td>
      <td>Item 4</td>
      <td>Item 5</td>
      <td>Item 6</td>
      <td>Item 7</td>
    </tr>
    <tr>
      <td>Item 1</td>
      <td>Item 2</td>
      <td>Item 3</td>
      <td>Item 4</td>
      <td>Item 5</td>
      <td>Item 6</td>
      <td>Item 7</td>
    </tr>
    <tr>
      <td>Item 1</td>
      <td>Item 2</td>
      <td>Item 3</td>
      <td>Item 4</td>
      <td>Item 5</td>
      <td>Item 6</td>
      <td>Item 7</td>
    </tr>
    <tr>
      <td>Item 1</td>
      <td>Item 2</td>
      <td>Item 3</td>
      <td>Item 4</td>
      <td>Item 5</td>
      <td>Item 6</td>
      <td>Item 7</td>
    </tr>
    <tr>
      <td>Item 1</td>
      <td>Item 2</td>
      <td>Item 3</td>
      <td>Item 4</td>
      <td>Item 5</td>
      <td>Item 6</td>
      <td>Item 7</td>
    </tr>
  </table>
  <table>
    <tr>
      <th>Table Heading 1</th>
      <th>Table Heading 1</th>
      <th>Table Heading 1</th>
      <th>Table Heading 1</th>
      <th>Table Heading 1</th>
      <th>Table Heading 1</th>
      <th>Table Heading 1</th>
      <th>Table Heading 1</th>
      <th>Table Heading 1</th>
      <th>Table Heading 1</th>
      <th>Table Heading 1</th>
      <th>Table Heading 1</th>
      <th>Table Heading 1</th>
      <th>Table Heading 2</th>
      <th>Table Heading 3</th>
      <th>Table Heading 4</th>
      <th>Table Heading 5</th>
      <th>Table Heading 6</th>
      <th>Table Heading 7</th>
    </tr>
  </table>
  <table>
    <tr>
      <th>small table</th>
    </tr>
  </table>
  <h1>Lists</h1>
  <hr />
  <h2>Ordered list</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis turpis vel urna suscipit, nec lacinia mauris luctus. Sed purus quam, mollis ut vulputate eu, convallis nec neque.</p>
  <ol>
    <li>Nulla eu eros neque. Sed volutpat ut risus et elementum. Pellentesque ante nibh, lobortis vitae sem id, tincidunt fringilla purus.</li>
    <li>Sed et condimentum enim. Suspendisse ac facilisis arcu, tristique iaculis nisi. Nulla facilisi. Sed non velit at odio molestie rutrum. Aliquam viverra ac lacus quis fringilla. Nulla fermentum nec dui sed convallis. Curabitur eget risus congue risus posuere porta vel ac neque. Vivamus efficitur pulvinar nisi ut rhoncus. Maecenas egestas lacinia feugiat. Nam faucibus hendrerit finibus.</li>
    <li>
      Quisque in turpis luctus dui consequat imperdiet. Cras massa arcu, sodales sed malesuada a, posuere et felis. Suspendisse pharetra ante lacinia massa aliquam, in accumsan felis rhoncus. Proin non massa non urna interdum maximus ac rutrum orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur ornare at ante vel tristique.
      <ol>
        <li>Morbi finibus convallis malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu lorem a dui volutpat facilisis sit amet ac enim. Nullam accumsan dolor est, a maximus neque maximus sed. Nulla viverra bibendum enim. Nam auctor metus a libero commodo scelerisque.</li>
        <li>
          Nulla eget ullamcorper augue, vitae efficitur dolor. Sed varius quis ipsum in mollis. Ut commodo odio at risus feugiat tempor. Vivamus ut leo at turpis rhoncus feugiat sit amet id mi. Sed dignissim semper ligula eget vestibulum. Donec eu congue odio. Duis urna eros, finibus ut risus id, ultrices condimentum nisi.
          <ul>
            <li>Sed et condimentum enim. Suspendisse ac facilisis arcu, tristique iaculis nisi. Nulla facilisi.</li>
            <li>Sed non velit at odio molestie rutrum. Aliquam viverra ac lacus quis fringilla.</li>
            <li>Sed eros justo, laoreet ut rhoncus sed, ultrices posuere ipsum. In scelerisque, velit eu mattis fringilla, massa est pharetra nulla, at posuere mauris quam non nunc.</li>
            <li>uisque vestibulum, libero et consectetur dignissim, magna nunc commodo enim, vitae dignissim risus massa eget eros.</li>
            <li>Phasellus vitae ex tincidunt, bibendum diam a, molestie massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </li>
      </ol>
    </li>
    <li>Sed et varius enim, id commodo tellus. In aliquet tristique quam id tincidunt. Proin vitae ligula imperdiet, lacinia purus dapibus, gravida nisl. Donec vel nisi vitae est vehicula aliquet vel ut eros. Donec rhoncus, arcu vitae fringilla tincidunt, ex nibh ultrices lacus, gravida volutpat nisi neque eget velit.</li>
    <li>Nulla eget ullamcorper augue, vitae efficitur dolor. Sed varius quis ipsum in mollis. Ut commodo odio at risus feugiat tempor. Vivamus ut leo at turpis rhoncus feugiat sit amet id mi. Sed dignissim semper ligula eget vestibulum.</li>
    <li>Nunc vel lacus magna. Nam eu lectus quis turpis feugiat faucibus in sit amet augue. Fusce dictum consequat tincidunt. Vivamus vestibulum venenatis enim sed consectetur. Maecenas mattis aliquam arcu vel efficitur.</li>
    <li>Nunc tempus quam neque, vitae tempor erat faucibus vitae. Sed interdum leo vitae ipsum cursus, ut bibendum ante fermentum. Fusce hendrerit volutpat nibh, sit amet tincidunt eros molestie facilisis.</li>
    <li>Cras mattis blandit dui quis hendrerit. Aenean sollicitudin elit sit amet massa dignissim malesuada. Donec pellentesque nisi et condimentum tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</li>
    <li>Sed non semper eros. Phasellus cursus vitae turpis non rhoncus. Pellentesque mollis risus eget tortor elementum, nec pellentesque orci iaculis. Aenean id leo magna. Donec ac lectus ut mi interdum placerat eu quis neque. Ut viverra lorem vel pharetra rutrum.</li>
    <li>Morbi aliquet dictum est quis sodales. Fusce dictum sapien et sapien tincidunt, id sodales nibh mollis. Morbi et nisi dignissim, varius nisl et, convallis dui.</li>
  </ol>
  <h2>Unordered list</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis turpis vel urna suscipit, nec lacinia mauris luctus. Sed purus quam, mollis ut vulputate eu, convallis nec neque.</p>
  <ul>
    <li>Nulla eu eros neque. Sed volutpat ut risus et elementum. Pellentesque ante nibh, lobortis vitae sem id, tincidunt fringilla purus.</li>
    <li>Sed et condimentum enim. Suspendisse ac facilisis arcu, tristique iaculis nisi. Nulla facilisi. Sed non velit at odio molestie rutrum. Aliquam viverra ac lacus quis fringilla. Nulla fermentum nec dui sed convallis. Curabitur eget risus congue risus posuere porta vel ac neque. Vivamus efficitur pulvinar nisi ut rhoncus. Maecenas egestas lacinia feugiat. Nam faucibus hendrerit finibus.</li>
    <li>
      Quisque in turpis luctus dui consequat imperdiet. Cras massa arcu, sodales sed malesuada a, posuere et felis. Suspendisse pharetra ante lacinia massa aliquam, in accumsan felis rhoncus. Proin non massa non urna interdum maximus ac rutrum orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur ornare at ante vel tristique.
      <ul>
        <li>Morbi finibus convallis malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu lorem a dui volutpat facilisis sit amet ac enim. Nullam accumsan dolor est, a maximus neque maximus sed. Nulla viverra bibendum enim. Nam auctor metus a libero commodo scelerisque.</li>
        <li>
          Nulla eget ullamcorper augue, vitae efficitur dolor. Sed varius quis ipsum in mollis. Ut commodo odio at risus feugiat tempor. Vivamus ut leo at turpis rhoncus feugiat sit amet id mi. Sed dignissim semper ligula eget vestibulum. Donec eu congue odio. Duis urna eros, finibus ut risus id, ultrices condimentum nisi.
          <ol>
            <li>Sed et condimentum enim. Suspendisse ac facilisis arcu, tristique iaculis nisi. Nulla facilisi.</li>
            <li>Sed non velit at odio molestie rutrum. Aliquam viverra ac lacus quis fringilla.</li>
            <li>Sed eros justo, laoreet ut rhoncus sed, ultrices posuere ipsum. In scelerisque, velit eu mattis fringilla, massa est pharetra nulla, at posuere mauris quam non nunc.</li>
            <li>uisque vestibulum, libero et consectetur dignissim, magna nunc commodo enim, vitae dignissim risus massa eget eros.</li>
            <li>Phasellus vitae ex tincidunt, bibendum diam a, molestie massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ol>
        </li>
      </ul>
    </li>
    <li>Sed et varius enim, id commodo tellus. In aliquet tristique quam id tincidunt. Proin vitae ligula imperdiet, lacinia purus dapibus, gravida nisl. Donec vel nisi vitae est vehicula aliquet vel ut eros. Donec rhoncus, arcu vitae fringilla tincidunt, ex nibh ultrices lacus, gravida volutpat nisi neque eget velit.</li>
    <li>Nulla eget ullamcorper augue, vitae efficitur dolor. Sed varius quis ipsum in mollis. Ut commodo odio at risus feugiat tempor. Vivamus ut leo at turpis rhoncus feugiat sit amet id mi. Sed dignissim semper ligula eget vestibulum.</li>
    <li>Nunc vel lacus magna. Nam eu lectus quis turpis feugiat faucibus in sit amet augue. Fusce dictum consequat tincidunt. Vivamus vestibulum venenatis enim sed consectetur. Maecenas mattis aliquam arcu vel efficitur.</li>
    <li>Nunc tempus quam neque, vitae tempor erat faucibus vitae. Sed interdum leo vitae ipsum cursus, ut bibendum ante fermentum. Fusce hendrerit volutpat nibh, sit amet tincidunt eros molestie facilisis.</li>
    <li>Cras mattis blandit dui quis hendrerit. Aenean sollicitudin elit sit amet massa dignissim malesuada. Donec pellentesque nisi et condimentum tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</li>
    <li>Sed non semper eros. Phasellus cursus vitae turpis non rhoncus. Pellentesque mollis risus eget tortor elementum, nec pellentesque orci iaculis. Aenean id leo magna. Donec ac lectus ut mi interdum placerat eu quis neque. Ut viverra lorem vel pharetra rutrum.</li>
    <li>Morbi aliquet dictum est quis sodales. Fusce dictum sapien et sapien tincidunt, id sodales nibh mollis. Morbi et nisi dignissim, varius nisl et, convallis dui.</li>
  </ul>
  `

const DebugPage: VoidComponent = () => {
  return (
    <div
      style={{
        'max-width': 'var(--content-page-width-wide)',
        'margin-inline': 'auto',
        'padding-inline': '30px'
      }}
    >
      <Title title="Debug" />
      <PageRenderer content={CONTENT} />
    </div>
  )
}

export default DebugPage
