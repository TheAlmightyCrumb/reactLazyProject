import React, { useState, useEffect } from "react";
import Form from "./Form";
import ErrorBoundary from "./ErrorBoundary";
import Count from "./Count";
import { read } from "../Network/CRUD";

export default function Blog() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    read("/comments/read").then((res) => setComments(res));
  }, []);

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div id="blog">
      <h1 id="blog-headline">Welcome to my Blog!</h1>
      <p id="blog-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis
        posuere eros. Integer at lectus sit amet nisl congue tempor a tempor
        tortor. Nullam sit amet dapibus diam. Nunc faucibus nec diam vitae
        condimentum. Fusce consectetur nunc in magna pulvinar, vitae venenatis
        nisi porttitor. Vivamus pulvinar ex ac elit rutrum placerat. Proin quis
        arcu eu orci auctor porttitor blandit pretium ante. Vivamus ultricies
        vel ex mollis cursus. Mauris semper tempor dui, et ultrices elit. Sed
        tempus urna id pretium feugiat. Nulla eu nibh ac ligula fermentum congue
        non a est. Phasellus vehicula cursus augue. Curabitur sagittis vitae mi
        et laoreet. Nunc varius libero ut est aliquam, sit amet venenatis eros
        lobortis. Praesent euismod nisl nibh, nec rhoncus justo placerat sed.
        Quisque in pharetra metus. Phasellus sed eleifend lorem, quis aliquam
        nisl. Ut eleifend enim eros, eu ultricies diam efficitur et. In suscipit
        semper urna, eget imperdiet ipsum rhoncus sed. Vestibulum suscipit
        efficitur ullamcorper. Aliquam in diam non nibh vehicula iaculis quis
        vitae sapien. Morbi velit eros, mattis placerat justo ut, iaculis
        maximus dolor. Fusce venenatis, velit in placerat luctus, ante neque
        pharetra lorem, non vulputate lorem mi et urna. Morbi sit amet varius
        sapien. Pellentesque interdum ligula a ex scelerisque hendrerit.
        Maecenas mattis sollicitudin lorem at laoreet. Phasellus sed ante
        interdum, dignissim eros ut, porta tellus. Aenean iaculis massa viverra
        congue lacinia. Donec sit amet nulla diam. Maecenas vestibulum efficitur
        enim eu convallis. Nam eget lobortis leo. Morbi eu vulputate massa.
        Etiam consectetur nisi mauris, at gravida ex feugiat sit amet. Mauris
        laoreet massa massa, sed aliquet ante commodo ut. Praesent vel efficitur
        dolor. Integer maximus quis nisl et porttitor. Ut mattis egestas
        vehicula. Vivamus vitae bibendum lorem. Donec pretium cursus augue, sed
        aliquam lorem consequat a. Curabitur sodales diam dapibus ante gravida,
        scelerisque cursus erat suscipit. Duis nec erat fringilla, pretium elit
        ac, pulvinar mauris. Praesent lobortis risus ut elit placerat pharetra
        at vel est. Curabitur non sem sit amet tellus vehicula auctor non vitae
        erat. Nullam in nibh ut tortor ultricies eleifend. Etiam ac dui ac massa
        laoreet mattis. Pellentesque habitant morbi tristique senectus et netus
        et malesuada fames ac turpis egestas. Phasellus iaculis eleifend
        molestie. Cras semper porta congue. Maecenas semper vestibulum dui id
        ultrices. Etiam odio neque, aliquam et luctus vel, mattis eget diam.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer sit amet blandit nisl. Donec maximus libero at libero
        scelerisque, eget imperdiet nisl sagittis. Mauris eu auctor erat. Proin
        gravida non sapien quis posuere. Integer ornare pellentesque velit nec
        fringilla. Maecenas purus leo, convallis in nisi vitae, tempor mattis
        lectus. Phasellus porta blandit vehicula. Duis malesuada nisi in nibh
        condimentum varius. Praesent consectetur eu nisi in feugiat. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Pellentesque justo enim, dapibus ac eros non,
        finibus fringilla eros. Pellentesque elementum viverra sapien, eu
        tincidunt ante vestibulum sed. Donec nec dui at tellus interdum congue.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Vivamus purus nunc, condimentum vel porta vitae,
        facilisis eu orci.
      </p>
      <h2 className="headlines">Comments</h2>
      <div id="comments">
        {comments.map((item, i) => {
          return (
            <div key={i} className="comment">
              <div>{item.name}</div>
              <div>{item.content}</div>
            </div>
          );
        })}
      </div>
      <h2 className="headlines">Join the Discussion</h2>
      <Form addComment={addComment} />
      <ErrorBoundary>
        <Count />
      </ErrorBoundary>
    </div>
  );
}
