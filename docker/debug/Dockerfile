FROM ruby:2.6.6-stretch
ARG USER
RUN mkdir /myapp
COPY script/build/debian/prebuild.sh myapp/script/build/debian/prebuild.sh
RUN myapp/script/build/debian/prebuild.sh
COPY script/build/debian/node.sh myapp/script/build/debian/node.sh
RUN myapp/script/build/debian/node.sh
COPY script/build/debian/postgres.sh myapp/script/build/debian/postgres.sh
RUN myapp/script/build/debian/postgres.sh
COPY gems /myapp/gems/
WORKDIR /myapp
COPY Gemfile /myapp/Gemfile
COPY Gemfile.lock /myapp/Gemfile.lock
RUN gem install bundler -v "~>1.0"
RUN bundle install
RUN groupadd -r -g 1000 $USER
RUN useradd -r -m -g $USER -u 1000 $USER
RUN chown -R $USER /usr/lib/node_modules
RUN chgrp -R $USER /usr/lib/node_modules
RUN chown -R $USER /myapp
RUN chgrp -R $USER /myapp
RUN chown -R $USER /myapp/Gemfile
RUN chgrp -R $USER /myapp/Gemfile.lock
RUN chown -R $USER /usr/local/bundle
RUN chgrp -R $USER /usr/local/bundle
USER $USER
EXPOSE 5000
CMD foreman start
